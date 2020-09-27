/**
 * @type {{
 *     assetId:     string,
 *     amount:      string|bigint,
 *     decimals:    int
 * }}
 */
let AssetCount;

/**
 * @type {{
 *     asm:         string,
 *     hex:         string,
 *     reqSigs:     int,
 *     type:        string,
 *     addresses:   array<string>
 * }}
 */
let ScriptPubKey;

/**
 * @type {{
 *     sequence:    int,
 *     value:       string|bigint,
 *
 *     coinbase:    string?,
 *
 *     txid:        string,
 *     vout:        int,
 *     source:      int,
 *     scriptSig:   {asm:string,hex:string},
 *     scriptPubKey:ScriptPubKey?,
 *     assets:      array<AssetCount>?
 * }}
 */
let Vin;

/**
 * @type {{
 *     value:       string|bigint,
 *     vout:        int,
 *     spent:       int?,
 *     scriptPubKey:ScriptPubKey,
 *     assets:      array<AssetCount>?
 * }}
 */
let Vout;

/**
 * key=txid
 * @type {{
 *     txid:       string,
 *     vin:        array<Vin>,
 *     vout:       array<Vout>,
 *     blockhash:  string,
 *     height:     int,
 *     time:       int
 * }}
 */
let TxData;


class AssetInput {
    /**
     * Takes DigiByte Tx Data and finds all inputs
     * @param {TxData}  txData
     */
    constructor(txData) {
        //record txid in case of error
        this._txid=txData.txid;

        //get list of inputs only copy asset data
        this._inputs=[];
        for (let vin of txData.vin) {
            //clone input asset data and break links
            let assets=[];
            let inAssets=vin.assets||[];
            for (/** @type {AssetCount} */let asset of inAssets) assets.push({
                assetId:    asset.assetId,
                amount:     BigInt(asset.amount),
                decimals:   asset.decimals
            });
            if (assets.length>0) this._inputs.push(assets);
        }

        //set index to 0
        this._index=0;
    }

    /**
     * Skips to next input
     */
    skip() {
        this._index++;
    }

    /**
     * Converts Percent to count
     * @param {int} percent
     * @return {bigint}
     */
    getCount(percent) {
        return this._inputs[this._index][0].amount*BigInt(percent)/100n;
    }

    /**
     * Gets number of decimals for current asset
     * @return {int}
     */
    getDecimals() {
        return this._inputs[this._index][0].decimals;
    }

    /**
     * Gets the asset id that would come next for the count requested
     * @param {bigint}  count
     * @return {string}
     */
    getAssetId(count) {
        let left=count;
        let assetId=this._inputs[this._index][0].assetId;
        while (left>0) {
            //check that input has assets
            if (this._inputs[this._index].length===0) throw new Error("Request from input with no assets: "+this._txid);

            //get number available
            let currentAmount=this._inputs[this._index][0].amount;

            //check asset id matched
            if (this._inputs[this._index][0].assetId!==assetId) throw new Error("Different asset then expected found in: "+this._txid);        //throw error for situation we can predict but unsure how to deal with

            //see if we used them all up
            if (currentAmount<=left) {
                //used all assets in the input up
                left-=currentAmount;
                this._inputs[this._index].shift();
                if (this._inputs[this._index].length===0) this._index++;    //used all inputs up so move to next
            } else {
                //there are assets left in the input
                this._inputs[this._index][0].amount-=left;
                left=0;
            }
        }
        return assetId;
    }

    /**
     * Gets any left over assets(should be applied to last output)
     * @return {[AssetCount]}
     */
    getChange() {
        let assets=[];
        for (let input of this._inputs) {
            for (/** @type {AssetCount} */let asset of input) {
                //something left over see if already in list
                for (/** @type {AssetCount} */let assetTest of assets) {
                    if (assetTest.assetId===asset.assetId) throw new Error("Multiple instance of same asset returned as change: "+this._txid);
                }
                assets.push(asset);
            }
        }
        return assets;
    }
}
module.exports=AssetInput;