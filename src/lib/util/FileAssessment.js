"use strict";
var FileCategoryType_1 = require("../enum/FileCategoryType");
var fs = require('fs');
var path = require('path');
var FileAssessment = (function () {
    function FileAssessment() {
    }
    FileAssessment.getFileCategoryString = function (type) {
        return FileCategoryType_1.default[type];
    };
    FileAssessment.getFileCategoryFromPath = function (filepath) {
        var extension = path.extname(filepath).substr(1);
        switch (extension) {
            case 'wav':
            case 'ogg':
            case 'mp3':
                {
                    return FileCategoryType_1.default.AUDIO;
                }
            case 'mp4':
            case 'mov':
                {
                    return FileCategoryType_1.default.VIDEO;
                }
            case 'json':
                {
                    return FileCategoryType_1.default.JSON;
                }
            case 'gif':
            case 'png':
            case 'jpg':
                {
                    return FileCategoryType_1.default.BITMAP;
                }
            default:
                {
                    return FileCategoryType_1.default.UNKNOWN;
                }
        }
    };
    FileAssessment.getFilesizeInBytes = function (filepath) {
        var stats = fs.statSync(filepath);
        var fileSizeInBytes = stats["size"];
        return fileSizeInBytes;
    };
    return FileAssessment;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FileAssessment;
