const nem2lib = require("nem2-library");

module.exports = async function (context, req) {
    if (req.query.type) {
        const input = req.query.type;
        let decTypeFromDec = 0;
        let decTypeFromHex = 0;
        let decTypeFromHexRev = 0;
        const tryParseInt = parseInt(input, 10);
        if (!isNaN(tryParseInt)) {
            decTypeFromDec = tryParseInt;
        }
        try {
            const uint8arr = nem2lib.convert.hexToUint8(input);
            const buf = Buffer.from(uint8arr);
            decTypeFromHex = buf.readUIntLE(0, uint8arr.length);
            decTypeFromHexRev = buf.readUIntBE(0, uint8arr.length);
        } catch (e) {

        }
        const decType = [decTypeFromDec, decTypeFromHex, decTypeFromHexRev];
        let typeName = "unknown";
        for (let i = 0; i < 3; i++) {
            switch (decType[i]) {
                case 16724:
                    typeName = "Transfer transaction";
                    break;
                case 16718:
                    typeName = "Register namespace transaction";
                    break;
                case 16717:
                    typeName = "Mosaic definition transaction";
                    break;
                case 16973:
                    typeName = "Mosaic supply change transaction";
                    break;
                case 17229:
                    typeName = "Mosaic levy change transaction";
                    break;
                case 16725:
                    typeName = "Modify multisig account transaction";
                    break;
                case 16705:
                    typeName = "Aggregate complete transaction";
                    break;
                case 16961:
                    typeName = "Aggregate bonded transaction";
                    break;
                case 16716:
                    typeName = "Hash lock transaction";
                    break;
                case 16722:
                    typeName = "Secret lock transaction (bison)";
                    break;
                case 16972:
                    typeName = "Secret lock transaction (alpaca)";
                    break;
                case 16978:
                    typeName = "Secret proof transaction (bison)";
                    break;
                case 17228:
                    typeName = "Secret proof transaction (alpaca)";
                    break;
                case 16720:
                    typeName = "Account properties address modification transaction";
                    break;
                case 16976:
                    typeName = "Account properties mosaic modification transaction";
                    break;
                case 17232:
                    typeName = "Account properties entity type modification transaction";
                    break;
            }
        }
        context.res = {
            status: 200,
            body: {
                name: typeName
            }
        };
    }
    else {
        context.res = {
            status: 400,
            body: {
                name: "Error"
            }
        };
    }
};