const nem2Sdk = require("nem2-sdk");
const nem2lib = require("nem2-library");

module.exports = async function (context, req) {

    if (req.body && req.body.address) {
        const binAddress = nem2lib.convert.hexToUint8(req.query.address);
        const rowAddress = nem2lib.address.addressToString(binAddress);
        const address = nem2Sdk.Address.createFromRawAddress(rowAddress);
        context.res = {
            status: 200,
            body: {
                addressPlain: address.plain(),
                addressPretty: address.pretty()
             }
        };
    }
    else {
        context.res = {
            status: 400,
            body: {
                addressPlain: 'Error',
                addressPretty: 'Error'
             }
        };
    }
};