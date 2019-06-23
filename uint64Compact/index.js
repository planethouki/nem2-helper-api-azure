const nem2Sdk = require("nem2-sdk");
const nem2lib = require("nem2-library");
const jssha3 = require('js-sha3');
const rxjs = require("rxjs");
const op = require("rxjs/operators");

const nw = nem2Sdk.NetworkType.MIJIN_TEST;
const epochTimestamp = 1459468800000;
module.exports = async function (context, req) {
    if (req.query.low && req.query.high) {
        const low = Number(req.query.low, 10);
        const high = Number(req.query.high, 10);
        if (isNaN(low) || isNaN(high)) {
            throw Error();
        }
        const compact = new nem2Sdk.UInt64([low, high]).compact();
        if (Number.isSafeInteger(compact)) {
            context.res = {
                status: 200,
                body: { compact }
            };
        } else {
            context.res = {
                status: 400,
                body: { compact: "Too Big" }
            };
        }
    }
    else {
        context.res = {
            status: 400,
            body: {
                compact: "Error"
            }
        };
    }
};