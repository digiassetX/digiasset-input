require('digiassetx-digibyte-stream-types');


class AssetInput {
    /**
     * Takes DigiByte Tx Data and finds all inputs
     * @param {TxData}  txData
     */
    constructor(txData) {
        this._allowSkip=true;

        //record txid in case of error
        this._txid=txData.txid;

        //get list of inputs only copy asset data
        this._inputs=[];
        for (let vin of txData.vin) {
            //clone input asset data and break links
            let assets=[];
            let inAssets=vin.assets||[];
            for (/** @type {AssetCount} */let {assetId,amount,decimals,cid} of inAssets) assets.push({
                assetId,
                amount:     BigInt(amount),
                decimals,
                cid
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
        if (this._allowSkip) this._index++;     //ignore skip if last instruction emptied the input
        this._allowSkip=true;
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
     * Gets cid if applicable
     * @return {string}
     */
    getCID() {
        return this._inputs[this._index][0].cid;
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
            this._allowSkip=true;   //make sure true for all instructions except where ends on exactly 0 left
            if ((currentAmount<left) && (assetId[1]==="h")) throw new Error("Hybrid assets can't rap over inputs: "+this._txid);
            if (currentAmount<=left) {
                //used all assets in the input up
                left-=currentAmount;
                this._inputs[this._index].shift();
                if (this._inputs[this._index].length===0) {
                    //used all inputs up so move to next
                    this._index++;
                    this._allowSkip=false;//exactly 0 left so disable skip
                }
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
                let needAdding=true;
                if (asset.assetId[1]==="a") {   //only search on aggregable
                    for (/** @type {AssetCount} */let assetTest of assets) {
                        if (assetTest.assetId === asset.assetId) {
                            //already there so add the amount
                            assetTest.amount += asset.amount;
                            needAdding = false;
                            break;
                        }
                    }
                }

                //not found so add
                if (needAdding) assets.push(asset);
            }
        }
        return assets;
    }
}
module.exports=AssetInput;