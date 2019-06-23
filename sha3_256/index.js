const jssha3 = require('js-sha3');

module.exports = async function (context, req) {
    if (req.query.payload) {
        const hasher = jssha3.sha3_512.create();
        const hash = hasher.update(Buffer.from(req.query.payload, 'hex')).hex().toUpperCase();
        res.json();
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