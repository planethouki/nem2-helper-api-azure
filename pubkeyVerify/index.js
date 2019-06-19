const nem2lib = require("nem2-library");

module.exports = async function (context, req) {

    if (req.body && req.body.pubkey && req.query.data && req.query.signature) {
        const publicKey = nem2lib.convert.hexToUint8(req.query.pubkey);
        const data = nem2lib.convert.hexToUint8(req.query.data);
        const signature = nem2lib.convert.hexToUint8(req.query.signature);
        const isSuccess = nem2lib.KeyPair.verify(publicKey, data, signature);
        context.res = {
            status: 200,
            body: { result: isSuccess ? 'success' : 'fail' }
        };
    }
    else {
        context.res = {
            status: 400,
            body: { result: "Error" }
        };
    }
};