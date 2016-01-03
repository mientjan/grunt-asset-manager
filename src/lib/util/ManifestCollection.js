"use strict";
var path = require('path');
var FileAssessment_1 = require("./FileAssessment");
var Manifest_1 = require("./Manifest");
var Flag_1 = require("./Flag");
var ManifestCollection = (function () {
    function ManifestCollection(files, dest) {
        this.tree = {};
        this.filesRelative = files.map(function (file) { return path.relative(path.dirname(dest), file); });
        this.files = files.map(function (file) { return new Manifest_1.default(file, FileAssessment_1.default.getFileCategoryFromPath(file), FileAssessment_1.default.getFilesizeInBytes(file)); });
    }
    ManifestCollection.prototype.getFileTypes = function () {
        var flag = new Flag_1.default();
        this.files.forEach(function (file) { return flag.add(file.type); });
        return flag;
    };
    ManifestCollection.prototype.toObjectTree = function () {
        var tree = {};
        this.files.forEach(function (man) { return man.getTree(tree); });
        return tree;
    };
    ManifestCollection.prototype.getManifestByType = function (type) {
        return this.files.filter(function (file) { return FileAssessment_1.default.getFileCategoryFromPath(file.src) == type; });
    };
    return ManifestCollection;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ManifestCollection;
