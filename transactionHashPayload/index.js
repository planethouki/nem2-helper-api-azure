const jssha3 = require('js-sha3');

module.exports = async function (context, req) {
    if (req.query.payload) {
        const payload = req.query.payload;
        const hashInputPayload =
            payload.substr(4*2,32*2) +
            payload.substr((4+64)*2,32*2) +
            payload.substr((4+64+32)*2);
        const hasher = jssha3.sha3_256.create();
        const hash = hasher.update(Buffer.from(hashInputPayload, 'hex')).hex().toUpperCase();
        context.res = {
            status: 200,
            body: { hash }
        };
    }
    else {
        context.res = {
            status: 400,
            body: {
                hash: "Error"
            }
        };
    }
};