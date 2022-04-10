var LEVEL;
(function (LEVEL) {
    LEVEL[LEVEL["INFO"] = 0] = "INFO";
    LEVEL[LEVEL["WARN"] = 1] = "WARN";
    LEVEL[LEVEL["ERROR"] = 2] = "ERROR";
})(LEVEL || (LEVEL = {}));
var Logger = /** @class */ (function () {
    function Logger(name, level) {
        this.name = name;
        this.level = level;
    }
    Logger.prototype.getName = function () {
        return this.name;
    };
    Logger.prototype.getLevel = function () {
        return this.level;
    };
    Logger.prototype.setName = function (name) {
        this.name = name;
    };
    Logger.prototype.setLevel = function (level) {
        this.level = level;
    };
    return Logger;
}());
