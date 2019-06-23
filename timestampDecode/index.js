const epochTimestamp = 1459468800000;

module.exports = async function (context, req) {
    if (req.query.timestamp) {
        const millis = parseInt(req.query.timestamp) + epochTimestamp;
        context.res = {
            status: 200,
            body: {
                utcString: new Date(millis).toUTCString()
            }
        };
    }
    else {
        context.res = {
            status: 400,
            body: {
                utcString: "Error"
            }
        };
    }
};