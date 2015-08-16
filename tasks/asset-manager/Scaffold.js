///<reference path="../../node.d.ts"/>
///<reference path="../../promise.d.ts"/>
var path = require('path');
var util = require('util');
var fs = require('fs');
var Promise = require('promise');
var FileCategoryEnum_1 = require("./FileCategoryEnum");
var AssetManagerGenerator = (function () {
    function AssetManagerGenerator(files, dest) {
        this._files = [];
        this._enum = null;
        this._config = null;
        // make file paths relative to dest
        this._files = files.map(function (file) {
            return path.relative(path.dirname(dest), file);
        });
        this._enum = new AssetsEnumGenerator(this._files);
        this._config = new AssetsConfigGenerator(this._enum);
    }
    AssetManagerGenerator.prototype.toJavascript = function () {
        return new Promise(function (resolve) {
        });
    };
    AssetManagerGenerator.prototype.toTypescript = function () {
        return new Promise(function (resolve) {
            fs.readFile('./template/assetenum.template.ts.txt', function (err, data) {
            });
        });
    };
    return AssetManagerGenerator;
})();
exports.AssetManagerGenerator = AssetManagerGenerator;
var AssetsEnumGenerator = (function () {
    function AssetsEnumGenerator(files) {
        this.tree = {};
        this.flatten = {};
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var parsed = path.parse(file);
            filepathToObject(this.tree, path.dirname(file), file, path.sep);
        }
        this.tree = this.normalizeStructure(this.tree);
        this.flatten = this.flattenStructure('', {}, this.tree);
        //console.log(this.tree);
        console.log(util.inspect(this.flatten, false, null));
        //console.log(this.flatten);
    }
    AssetsEnumGenerator.prototype.normalizeStructure = function (structure) {
        var keys = Object.keys(structure);
        console.log(keys);
        if (keys.length == 1) {
            return this.normalizeStructure(structure[keys[0]]);
        }
        else {
            return structure;
        }
    };
    AssetsEnumGenerator.prototype.flattenStructure = function (baseKey, baseObject, structure, seperator) {
        if (seperator === void 0) { seperator = '_'; }
        for (var key in structure) {
            var value = structure[key];
            if (value) {
                if (typeof value == 'string') {
                    var name = path.parse(value).name.replace(/-/, '');
                    baseObject[baseKey + seperator + key + seperator + name] = value;
                }
                else if (value instanceof Array) {
                    var allStr = value.every(function (item) { return typeof item == 'string'; });
                    console.log('allStr', allStr);
                }
                else {
                    this.flattenStructure((baseKey.length > 0 ? baseKey + seperator : baseKey) + key, baseObject, value);
                }
            }
        }
        return baseObject;
    };
    AssetsEnumGenerator.prototype.toTypescript = function () {
        return new Promise(function (resolve) {
            fs.readFile('./template/assetenum.template.ts.txt', function (err, data) {
            });
        });
    };
    return AssetsEnumGenerator;
})();
var AssetsConfigGenerator = (function () {
    function AssetsConfigGenerator(assetEnum) {
    }
    AssetsConfigGenerator.prototype.toJavascript = function () {
        return '';
    };
    AssetsConfigGenerator.prototype.toTypescript = function () {
        return '';
    };
    return AssetsConfigGenerator;
})();
function fileCategory(filepath) {
    var extension = path.extname(filepath);
    switch (extension) {
        case 'wav':
        case 'ogg':
        case 'mp3':
            {
                return FileCategoryEnum_1.default.AUDIO;
            }
        case 'mp4':
        case 'mov':
            {
                return FileCategoryEnum_1.default.VIDEO;
            }
        case 'json':
            {
                return FileCategoryEnum_1.default.JSON;
            }
        case 'gif':
        case 'png':
        case 'jpg':
            {
                return FileCategoryEnum_1.default.BITMAP;
            }
        default:
            {
                return FileCategoryEnum_1.default.UNKNOWN;
            }
    }
}
function filepathToObject(obj, id, value, seperator) {
    //console.log(arguments);
    var seperator = seperator || path.sep;
    var value = value || '';
    var idList = id.split(seperator);
    if (idList.length == 1) {
        if (!obj[idList[0]]) {
            obj[idList[0]] = [];
        }
        obj[idList[0]].push(value);
    }
    else {
        var key = idList.shift();
        obj[key] = filepathToObject(obj[key] || {}, idList.join(seperator), value, seperator);
    }
    return obj;
}
