"use strict";
var path = require('path');
var FileCategoryType_1 = require("../enum/FileCategoryType");
var FileAssessment_1 = require("../util/FileAssessment");
var Manifest = (function () {
    function Manifest(files, dest) {
        var _this = this;
        this.tree = {};
        this.filesRelative = files.map(function (file) { return path.relative(path.dirname(dest), file); });
        this.files = files.map(function (file) {
            return {
                src: file,
                type: FileCategoryType_1.default[FileAssessment_1.default.getFileCategoryFromPath(file)].toLowerCase(),
                typen: FileAssessment_1.default.getFileCategoryFromPath(file),
                bytesize: FileAssessment_1.default.getFilesizeInBytes(file)
            };
        });
        this.files.forEach(function (file) { return _this.manifestToObjectTree(_this.tree, path.dirname(file.src), file); });
    }
    Manifest.prototype.manifestToObjectTree = function (obj, id, value, seperator) {
        if (seperator === void 0) { seperator = path.sep; }
        var idList = id.split(seperator);
        if (idList.length == 1) {
            if (!obj[idList[0]]) {
                obj[idList[0]] = [];
            }
            obj[idList[0]].push(value);
        }
        else {
            var key = idList.shift();
            obj[key] = this.manifestToObjectTree(obj[key], idList.join(seperator), value, seperator);
        }
        return obj;
    };
    Manifest.prototype.toList = function () {
        return this.files.map(function (file) {
            return {
                src: file,
                type: FileCategoryType_1.default[FileAssessment_1.default.getFileCategoryFromPath(file)].toLowerCase(),
                typen: FileAssessment_1.default.getFileCategoryFromPath(file),
                bytesize: FileAssessment_1.default.getFilesizeInBytes(file)
            };
        });
    };
    return Manifest;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Manifest;
