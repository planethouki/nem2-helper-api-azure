const nem2Sdk = require("nem2-sdk");

module.exports = async function (context, req) {
    if (req.query.namespace) {
        const namespaceId = new nem2Sdk.NamespaceId(req.query.namespace);
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
            body: "Please pass a name on the query string or in the request body"
        };
    }
};