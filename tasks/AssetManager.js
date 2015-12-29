"use strict";
var ManagerType = require("../src/enum/ManagerType");
function Grunt(grunt) {
    var options;
    grunt.registerMultiTask('asset-manager', '-', function () {
        var done = this.async();
        options = this.options({
            type: ManagerType[ManagerType.TYPESCRIPT].toLowerCase()
        });
        console.log(this.files);
    });
}
module.exports = Grunt;
