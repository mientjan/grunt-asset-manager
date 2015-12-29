"use strict";
var FileCategoryType;
(function (FileCategoryType) {
    FileCategoryType[FileCategoryType["UNKNOWN"] = 1] = "UNKNOWN";
    FileCategoryType[FileCategoryType["AUDIO"] = 2] = "AUDIO";
    FileCategoryType[FileCategoryType["BITMAP"] = 4] = "BITMAP";
    FileCategoryType[FileCategoryType["BITMAP_JPG"] = 8] = "BITMAP_JPG";
    FileCategoryType[FileCategoryType["BITMAP_PNG"] = 16] = "BITMAP_PNG";
    FileCategoryType[FileCategoryType["BITMAP_GIF"] = 32] = "BITMAP_GIF";
    FileCategoryType[FileCategoryType["VIDEO"] = 64] = "VIDEO";
    FileCategoryType[FileCategoryType["JSON"] = 128] = "JSON";
    FileCategoryType[FileCategoryType["JSON_MANIFEST"] = 256] = "JSON_MANIFEST";
})(FileCategoryType || (FileCategoryType = {}));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FileCategoryType;
