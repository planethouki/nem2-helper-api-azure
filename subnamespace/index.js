const nem2Sdk = require("nem2-sdk");

module.exports = async function (context, req) {
    if (req.query.parentNamespace && req.query.subNamespace) {
        const namespaceId = new nem2Sdk.NamespaceId(
            req.query.parentNamespace + "." + req.query.subNamespace);
        context.res = {
            status: 200,
            body: {
                namespaceIdUInt64: JSON.stringify(namespaceId.id.toDTO()),
                namespaceIdHex: namespaceId.toHex()
            }
        };
    }
    else {
        context.res = {
            status: 400,
            body: {
                namespaceIdUInt64: "Error",
                namespaceIdHex: "Error"
                
            }
        };
    }
};