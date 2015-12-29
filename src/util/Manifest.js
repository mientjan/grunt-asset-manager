"use strict";
var path = require('path');
var FileCategoryType_1 = require("../enum/FileCategoryType");
var FileAssessment_1 = require("../util/FileAssessment");
var Manifest = (function () {
    function Manifest(files, dest) {
        this.files = files.map(function (file) { return path.relative(path.dirname(dest), file); });
    }
    Manifest.prototype.toJSON = function () {
        return this.files.map(function (file) {
            return {
                src: file,
                type: FileCategoryType_1.default[FileAssessment_1.default.getFileCategoryFromPath(file)].toLowerCase(),
                typen: FileAssessment_1.default.getFileCategoryFromPath(file),
                bytesize: FileAssessment_1.default.getFilesizeInBytes(file)
            };
        });
    };
    Manifest.prototype.toString = function () {
        return JSON.stringify(this.toJSON());
    };
    return Manifest;
})();
exports.Manifest = Manifest;
