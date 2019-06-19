const nem2lib = require("nem2-library");

module.exports = async function (context, req) {

    if (req.body && req.body.privkey && req.body.data) {
        const keypair = nem2lib.KeyPair.createKeyPairFromPrivateKeyString(req.body.privkey);
        const signData = req.body.data;
        const signature = nem2lib.KeyPair.sign(keypair, signData);
        context.res = {
            status: 200,
            body: { signature: nem2lib.convert.uint8ToHex(signature) }
        };
    }
    else {
        context.res = {
            status: 400,
            body: { signature: "Error" }
        };
    }
};