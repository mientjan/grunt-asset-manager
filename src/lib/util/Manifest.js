"use strict";
var FileCategoryType_1 = require("../enum/FileCategoryType");
var path = require("path");
var Manifest = (function () {
    function Manifest(src, type, size) {
        this.src = src;
        this.type = type;
        this.size = size;
    }
    Manifest.prototype.getTypeString = function () {
        return FileCategoryType_1.default[this.type].toLowerCase();
    };
    Manifest.prototype.getTree = function (tree, id) {
        if (tree === void 0) { tree = {}; }
        if (id === void 0) { id = path.dirname(this.src).split(path.sep); }
        var key;
        if (id.length > 1) {
            key = id.shift();
            if (!tree[key]) {
                tree[key] = {};
            }
            this.getTree(tree[key], id);
        }
        else if (id.length == 1) {
            key = id[0];
            if (!tree[key]) {
                tree[key] = [];
            }
            tree[key].push(this);
        }
    };
    return Manifest;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Manifest;
