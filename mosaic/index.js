const nem2Sdk = require("nem2-sdk");

module.exports = async function (context, req) {
    if (req.query.mosaic) {
        const mosaicId = new nem2Sdk.MosaicId(req.query.mosaic);
        context.res = {
            status: 200,
            body: {
                mosaicIdUInt64: JSON.stringify(mosaicId.id.toDTO()),
                mosaicIdHex: mosaicId.toHex()
            }
        };
    }
    else {
        context.res = {
            status: 400,
            body: {
                mosaicIdUInt64: "Error",
                mosaicIdHex: "Error"
            }
        };
    }
};