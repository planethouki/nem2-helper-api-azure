const nem2Sdk = require("nem2-sdk");
const nw = nem2Sdk.NetworkType.MIJIN_TEST;

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