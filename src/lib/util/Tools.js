function log() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i - 0] = arguments[_i];
    }
    if (arg.length > 1) {
        console.log(JSON.stringify(arg, null, "\t"));
    }
    else {
        console.log(JSON.stringify(arg[0], null, "\t"));
    }
}
exports.log = log;
//# sourceMappingURL=Tools.js.map