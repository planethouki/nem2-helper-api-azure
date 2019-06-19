const nem2Sdk = require("nem2-sdk");
const nem2lib = require("nem2-library");
const jssha3 = require('js-sha3');
const rxjs = require("rxjs");
const op = require("rxjs/operators");

const nw = nem2Sdk.NetworkType.MIJIN_TEST;
const epochTimestamp = 1459468800000;

module.exports = async function (context, req) {

    if (req.body && req.body.privkey) {
        const ac = nem2Sdk.Account.createFromPrivateKey(req.body.privkey, nw);
        context.res = {
            status: 200,
            body: { pubkey: ac.publicKey }
        };
    }
    else {
        context.res = {
            status: 400,
            body: { pubkey: "Error" }
        };
    }
};