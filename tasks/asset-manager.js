///<reference path="../node.d.ts"/>
var ManagerTypeEnum = require("../library/ManagerTypeEnum");
var Scaffold_1 = require("./asset-manager/Scaffold");
function Grunt(grunt) {
    var options;
    grunt.registerMultiTask('asset-manager', 'Prefix CSS files.', function () {
        var done = this.async();
        options = this.options({
            type: ManagerTypeEnum[ManagerTypeEnum.TYPESCRIPT].toLowerCase()
        });
        console.log(this.filesSrc);
        console.log(this.files);
        for (var i = 0; i < this.files.length; i++) {
            var files = this.files[i];
            var generator = new Scaffold_1.AssetManagerGenerator(files.src, files.dest);
        }
    });
}
module.exports = Grunt;
