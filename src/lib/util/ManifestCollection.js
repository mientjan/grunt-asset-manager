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
    ManifestCollection.prototype.getStartBaseRoot = function (tree) {
        if (tree === void 0) { tree = this.toObjectTree(); }
        var keys = Object.keys(tree);
        var result = [];
        if (keys.length == 1) {
            result.push(keys[0]);
            result = result.concat(this.getStartBaseRoot(tree[keys[0]]));
        }
        return result;
    };
    ManifestCollection.prototype.getSortedByDirectory = function () {
        var baseRoot = this.getStartBaseRoot().join(path.sep);
        var all = [];
        var dirs = {};
        this.files.forEach(function (man, index) {
            var pathList = path.dirname(man.src).replace(baseRoot, '').split(path.sep)
                .filter(function (value) { return value != ''; });
            var prev = '';
            pathList = pathList.map(function (value) { return prev = prev ? prev + '_' + value : value; });
            pathList.forEach(function (value) {
                if (dirs[value] === void 0) {
                    dirs[value] = [];
                }
                dirs[value].push(index);
                if (all.indexOf(index) == -1) {
                    all.push(index);
                }
            });
        });
        dirs['all'] = all;
        return dirs;
    };
    ManifestCollection.prototype.getSortedByType = function () {
        var dirs = {};
        this.files.forEach(function (man, index) {
            var type = FileAssessment_1.default.getFileCategoryFromPath(man.src);
            var typeString = FileAssessment_1.default.getFileCategoryString(type);
            if (!dirs[typeString]) {
                dirs[typeString] = [];
            }
            dirs[typeString].push(index);
        });
        return dirs;
    };
    return ManifestCollection;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ManifestCollection;
