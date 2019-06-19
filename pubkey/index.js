const nem2Sdk = require("nem2-sdk");

const nw = nem2Sdk.NetworkType.MIJIN_TEST;

module.exports = async function (context, req) {

    if (req.query.pubkey) {
        const ac = nem2Sdk.PublicAccount.createFromPublicKey(req.query.pubkey, nw);
        context.res = {
            status: 200,
            body: {
                addressPlain: ac.address.plain(),
                addressPretty: ac.address.pretty()
            }
        };
    }
    else {
        context.res = {
            status: 400,
            body: {
                addressPlain: "Error",
                addressPretty: "Error"
            }
        };
    }
};