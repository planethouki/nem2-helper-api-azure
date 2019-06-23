const nem2Sdk = require("nem2-sdk");
const nem2lib = require("nem2-library");

module.exports = async function (context, req) {

    if (req.query.address) {
        const address = nem2Sdk.Address.createFromRawAddress(req.query.address);
        const binAddress = nem2lib.address.stringToAddress(address.plain());
        const hexAddress = nem2lib.convert.uint8ToHex(binAddress);
        context.res = {
            status: 200,
            body: { address: hexAddress }
        };
    }
    else {
        context.res = {
            status: 400,
            body: { address: "Error" }
        };
    }
};