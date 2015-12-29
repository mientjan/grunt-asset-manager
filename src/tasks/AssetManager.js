"use strict";
var ManagerType_1 = require("../lib/enum/ManagerType");
var Manifest_1 = require("../lib/util/Manifest");
function Grunt(grunt) {
    var options;
    grunt.registerMultiTask('asset-manager', '-', function () {
        var done = this.async();
        options = this.options({
            type: ManagerType_1.ManagerType[ManagerType_1.ManagerType.TYPESCRIPT].toLowerCase()
        });
        var files = [];
        for (var i = 0; i < this.files.length; i++) {
            var src = this.files[i].src;
            var dest = this.files[i].dest;
            var manifest = new Manifest_1.default(src, dest);
            console.log(manifest.tree);
        }
    });
}
module.exports = Grunt;