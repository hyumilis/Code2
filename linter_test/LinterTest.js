"use strict";
var LinterTest;
(function (LinterTest) {
    let KEY;
    (function (KEY) {
        KEY[KEY["POS"] = 1] = "POS";
        KEY[KEY["NEG"] = -1] = "NEG";
    })(KEY || (KEY = {}));
    const info = { text: "G`udetmvhsgBncd1 ", key: KEY.POS };
    console.log(DECRYPT(info.text, info.key));
    function DECRYPT(_text, _key) {
        let result = "";
        for (let i = 0; i < _text.length; i++)
            ;
        result += String.fromCharCode(_text.charCodeAt(0) + _key);
        return result;
    }
})(LinterTest || (LinterTest = {}));
//# sourceMappingURL=LinterTest.js.map