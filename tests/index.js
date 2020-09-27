require('nodeunit');
const AssetInput = require('../index');

module.exports = {
    'load first transfer': function(test) {
        let input=new AssetInput(
            {
                "txid": "5168afe2c85f24c3985c3aeafe8dc4c836c57e89f0c63242c85e9376b1d49ac6",
                "hash": "5168afe2c85f24c3985c3aeafe8dc4c836c57e89f0c63242c85e9376b1d49ac6",
                "version": 1,
                "size": 425,
                "vsize": 425,
                "weight": 1700,
                "locktime": 0,
                "vin": [
                    {
                        "txid": "7ad5a1fefa2c65473a8d6d6e1a0d242f7045c0cc90564222a91ae6d8124c2e7f",
                        "vout": 2,
                        "scriptSig": {
                            "asm": "304502210088de3816ea59166ea162f55002ce137c05ac32bd8bb01527251ad1a56e942ff1022042025c4aeae5a5282f78a927b5fc63ea1f94c65a2701ebb0bcc80376fec4e8f8[ALL] 0361c0d3a2175c32c1ad08972a22004779d9aee8d4d72fb3c038b373883b70b67c",
                            "hex": "48304502210088de3816ea59166ea162f55002ce137c05ac32bd8bb01527251ad1a56e942ff1022042025c4aeae5a5282f78a927b5fc63ea1f94c65a2701ebb0bcc80376fec4e8f801210361c0d3a2175c32c1ad08972a22004779d9aee8d4d72fb3c038b373883b70b67c"
                        },
                        "sequence": 4294967295,
                        "value": "600",
                        "source": 8432316,
                        "scriptPubKey": {
                            "asm": "OP_DUP OP_HASH160 fcfb5344c88cf4687cfde418ad86c17f931c0177 OP_EQUALVERIFY OP_CHECKSIG",
                            "hex": "76a914fcfb5344c88cf4687cfde418ad86c17f931c017788ac",
                            "reqSigs": 1,
                            "type": "pubkeyhash",
                            "addresses": [
                                "DUCjtz7RDTm9JvCmYX4ZFJgzGvifKMPjNU"
                            ]
                        },
                        "assets": [
                            {
                                assetId:    "Ua94nEKabzhJeDJtxGFXdviT185tYeHqyHKeWC",
                                amount:     "100",
                                decimals:   2
                            }
                        ]
                    },
                    {
                        "txid": "7ad5a1fefa2c65473a8d6d6e1a0d242f7045c0cc90564222a91ae6d8124c2e7f",
                        "vout": 1,
                        "scriptSig": {
                            "asm": "3045022100f919d947c7bdee9fb3dc10d4a327089d3eaf50d04940d3b2e5b2c9d861e33d910220277af6cb57fc98c5e869c1f8e5e6311a2c3674cfbcab05d46fefd8ec9cc130ca[ALL] 031a2617af533d6e58442b274a69d39194c64431a5caca5d45433f020744e40848",
                            "hex": "483045022100f919d947c7bdee9fb3dc10d4a327089d3eaf50d04940d3b2e5b2c9d861e33d910220277af6cb57fc98c5e869c1f8e5e6311a2c3674cfbcab05d46fefd8ec9cc130ca0121031a2617af533d6e58442b274a69d39194c64431a5caca5d45433f020744e40848"
                        },
                        "sequence": 4294967295,
                        "value": "299994400",
                        "source": 8432316,
                        "scriptPubKey": {
                            "asm": "OP_DUP OP_HASH160 2d6d5ceebfdf0829d4ed12a0e26c04b73b123528 OP_EQUALVERIFY OP_CHECKSIG",
                            "hex": "76a9142d6d5ceebfdf0829d4ed12a0e26c04b73b12352888ac",
                            "reqSigs": 1,
                            "type": "pubkeyhash",
                            "addresses": [
                                "D9HHxZp1UNvGT2X7ivGR74uBLvs55SrPhC"
                            ]
                        }
                    }
                ],
                "vout": [
                    {
                        "value": "600",
                        "scriptPubKey": {
                            "asm": "OP_DUP OP_HASH160 b0d5d15901856da5e6713e18d9215625d32c6514 OP_EQUALVERIFY OP_CHECKSIG",
                            "hex": "76a914b0d5d15901856da5e6713e18d9215625d32c651488ac",
                            "reqSigs": 1,
                            "type": "pubkeyhash",
                            "addresses": [
                                "DMG7cLdhFZNraPpUZyschxBB8ogPqFMWMt"
                            ]
                        },
                        "vout": 0,
                        "assets": [
                            {
                                assetId:    "Ua94nEKabzhJeDJtxGFXdviT185tYeHqyHKeWC",
                                amount:     "1"
                            }
                        ]
                    },
                    {
                        "value": "0",
                        "scriptPubKey": {
                            "asm": "OP_RETURN 444101150001",
                            "hex": "6a06444101150001",
                            "type": "nulldata"
                        },
                        "vout": 1
                    },
                    {
                        "value": "200994344",
                        "scriptPubKey": {
                            "asm": "OP_DUP OP_HASH160 a7731941a96f891504956370af1a21d775c234c0 OP_EQUALVERIFY OP_CHECKSIG",
                            "hex": "76a914a7731941a96f891504956370af1a21d775c234c088ac",
                            "reqSigs": 1,
                            "type": "pubkeyhash",
                            "addresses": [
                                "DLQVGVKYtJ8nWHrPGVL6KSC1VcT3rxPQke"
                            ]
                        },
                        "vout": 2
                    },
                    {
                        "value": "600",
                        "scriptPubKey": {
                            "asm": "OP_DUP OP_HASH160 2d6d5ceebfdf0829d4ed12a0e26c04b73b123528 OP_EQUALVERIFY OP_CHECKSIG",
                            "hex": "76a9142d6d5ceebfdf0829d4ed12a0e26c04b73b12352888ac",
                            "reqSigs": 1,
                            "type": "pubkeyhash",
                            "addresses": [
                                "D9HHxZp1UNvGT2X7ivGR74uBLvs55SrPhC"
                            ]
                        },
                        "vout": 3,
                        "assets": [
                            {
                                assetId:    "Ua94nEKabzhJeDJtxGFXdviT185tYeHqyHKeWC",
                                amount:     "99"
                            }
                        ]
                    }
                ],
                "hex": "01000000027f2e4c12d8e61aa922425690ccc045702f240d1a6e6d8d3a47652cfafea1d57a020000006b48304502210088de3816ea59166ea162f55002ce137c05ac32bd8bb01527251ad1a56e942ff1022042025c4aeae5a5282f78a927b5fc63ea1f94c65a2701ebb0bcc80376fec4e8f801210361c0d3a2175c32c1ad08972a22004779d9aee8d4d72fb3c038b373883b70b67cffffffff7f2e4c12d8e61aa922425690ccc045702f240d1a6e6d8d3a47652cfafea1d57a010000006b483045022100f919d947c7bdee9fb3dc10d4a327089d3eaf50d04940d3b2e5b2c9d861e33d910220277af6cb57fc98c5e869c1f8e5e6311a2c3674cfbcab05d46fefd8ec9cc130ca0121031a2617af533d6e58442b274a69d39194c64431a5caca5d45433f020744e40848ffffffff0458020000000000001976a914b0d5d15901856da5e6713e18d9215625d32c651488ac0000000000000000086a0644410115000128eefa0b000000001976a914a7731941a96f891504956370af1a21d775c234c088ac58020000000000001976a9142d6d5ceebfdf0829d4ed12a0e26c04b73b12352888ac00000000",
                "blockhash": "00000000000000024f0e5f8831e13d9c4dc3b3462510db453844c22dca075bac",
                "height": 8432959,
                "time": 1553608681
            }
        );
        test.equal(input.getCount(50),50);
        test.equal(input.getAssetId(1n),"Ua94nEKabzhJeDJtxGFXdviT185tYeHqyHKeWC");
        test.equal(input.getDecimals(),2);
        let {assetId,amount,decimals}=input.getChange()[0];
        test.equal(assetId,"Ua94nEKabzhJeDJtxGFXdviT185tYeHqyHKeWC");
        test.equal(amount,99n);
        test.equal(decimals,2);
        test.done();
    }

};

