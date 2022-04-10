"use strict";
exports.__esModule = true;
exports.RegularFigure = exports.SimpleMath = exports.FIGURE = void 0;
var FIGURE;
(function (FIGURE) {
    FIGURE[FIGURE["SQUARE"] = 0] = "SQUARE";
    FIGURE[FIGURE["RECTANGLE"] = 1] = "RECTANGLE";
    FIGURE[FIGURE["TRIANGLE"] = 2] = "TRIANGLE";
})(FIGURE = exports.FIGURE || (exports.FIGURE = {}));
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.areaTriangle = function (b, h) {
        return (b * h) / 2;
    };
    SimpleMath.prototype.areaSquare = function (l) {
        return l * l;
    };
    SimpleMath.prototype.areaRectangle = function (b, h) {
        return b * h;
    };
    SimpleMath.prototype.perimeterTriangle = function (x, y, z) {
        return x + y + z;
    };
    SimpleMath.prototype.perimeterRectangle = function (b, h) {
        return (b + h) * 2;
    };
    SimpleMath.prototype.perimeterSquare = function (l) {
        return l * l;
    };
    SimpleMath.prototype.operation = function (o, f) {
        switch (f) {
            case FIGURE.SQUARE:
                return this.perimeterSquare(o.side), this.areaSquare(o.side);
            case FIGURE.RECTANGLE:
                return this.perimeterRectangle(o.base, o.height), this.areaRectangle(o.base, o.height);
            case FIGURE.TRIANGLE:
                return this.perimeterTriangle(o.x, o.y, o.z), this.areaTriangle(o.base, o.height);
        }
    };
    return SimpleMath;
}());
exports.SimpleMath = SimpleMath;
var RegularFigure = /** @class */ (function () {
    function RegularFigure() {
    }
    return RegularFigure;
}());
exports.RegularFigure = RegularFigure;
