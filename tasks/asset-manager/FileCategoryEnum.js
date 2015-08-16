var FileCategory;
(function (FileCategory) {
    FileCategory[FileCategory["UNKNOWN"] = 0] = "UNKNOWN";
    FileCategory[FileCategory["AUDIO"] = 1] = "AUDIO";
    FileCategory[FileCategory["BITMAP"] = 2] = "BITMAP";
    FileCategory[FileCategory["VIDEO"] = 3] = "VIDEO";
    FileCategory[FileCategory["JSON"] = 4] = "JSON";
})(FileCategory || (FileCategory = {}));
exports.default = FileCategory;
