module.exports = async function (context, req) {
    if (req.query.payload) {
        const buf = Buffer.from(req.query.payload, 'hex');
        context.res = {
            status: 200,
            body: {
                decoded: buf.toString('utf8')
            }
        };
    }
    else {
        context.res = {
            status: 400,
            body: {
                body: "Error"
            }
        };
    }
};