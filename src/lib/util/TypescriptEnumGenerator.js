"use strict";
var FileCategoryType_1 = require("../enum/FileCategoryType");
var path = require("path");
var fs = require("fs");
var TypescriptEnumGenerator = (function () {
    function TypescriptEnumGenerator(manifest) {
        this.tree = {};
        this.flatten = {};
        this._manifest = manifest;
    }
    TypescriptEnumGenerator.prototype.getEnum = function () {
        var tree = this.normalizeStructure(this._manifest.toObjectTree());
        var dir = [];
        for (var i = 0; i < FileCategoryType_1.default; i++) {
            array[i];
        }
        return '';
    };
    TypescriptEnumGenerator.prototype.normalizeStructure = function (structure) {
        var keys = Object.keys(structure);
        if (keys.length == 1) {
            return this.normalizeStructure(structure[keys[0]]);
        }
        else {
            return structure;
        }
    };
    TypescriptEnumGenerator.prototype.flattenStructure = function (baseKey, baseObject, structure, seperator) {
        if (seperator === void 0) { seperator = '_'; }
        for (var key in structure) {
            var value = structure[key];
            if (value) {
                if (typeof value == 'string') {
                    var name = path.parse(value).name.replace(/-/, '');
                    baseObject[baseKey + seperator + key + seperator + name] = value;
                }
                else if (value instanceof Array) {
                    var allStrings = value.every(function (item) { return typeof item == 'string'; });
                    if (allStrings) {
                    }
                }
                else {
                    this.flattenStructure((baseKey.length > 0 ? baseKey + seperator : baseKey) + key, baseObject, value);
                }
            }
        }
        return baseObject;
    };
    TypescriptEnumGenerator.prototype.toTypescript = function () {
        return new Promise(function (resolve) {
            fs.readFile('./template/assetenum.template.ts.txt', function (err, data) {
            });
        });
    };
    return TypescriptEnumGenerator;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TypescriptEnumGenerator;
