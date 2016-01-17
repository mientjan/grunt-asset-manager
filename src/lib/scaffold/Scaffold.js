"use strict";
var mustache = require("mustache");
var Scaffold = (function () {
    function Scaffold(collection) {
        this.collection = collection;
    }
    Scaffold.prototype.toString = function () {
        var template;
        return mustache.parse;
    };
    return Scaffold;
}());
