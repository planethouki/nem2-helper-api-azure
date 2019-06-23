const nem2lib = require("nem2-library");

module.exports = async function (context, req) {
    if (req.query.payload) {
        const uint8arr = nem2lib.convert.hexToUint8(req.query.payload);
        context.res = {
            status: 200,
            body: {
                converted: nem2lib.convert.uint8ToHex(uint8arr.reverse())
            }
        };
    }
    else {
        context.res = {
            status: 400,
            body: {
                converted: "Error"
            }
        };
    }
};