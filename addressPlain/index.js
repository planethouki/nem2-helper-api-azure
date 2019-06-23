const nem2Sdk = require("nem2-sdk");

module.exports = async function (context, req) {

    if (req.query.address) {
        const ret = nem2Sdk.Address.createFromRawAddress(req.query.address).plain();
        context.res = {
            status: 200,
            body: { addressPlain: ret }
        };
    }
    else {
        context.res = {
            status: 400,
            body: { addressPlain: "Error" }
        };
    }
};