const errCode = require('./message/errorCode');
const util = require('./util/util');

// 发送json
function sendJson(res, errcode, data = []) {
    var output = new Object();

    output.errcode = errcode;
    if (data.length != 0) {
        output.data = data;
    }

    res.json(output);
}


module.exports = {
    errCode,
    sendJson,
    util
}