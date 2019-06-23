module.exports = async function (context, req) {
    if (req.query.payload) {
        const binary = Buffer.from(req.query.payload, 'base64');
        context.res = {
            status: 200,
            body: {
                decoded: binary.toString('hex').toUpperCase(),
            }
        };
    }
    else {
        context.res = {
            status: 400,
            body: {
                decoded: "Error"
            }
        };
    }
};