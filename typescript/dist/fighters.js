"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var baseShips_1 = require("./baseShips");
var Milenium = /** @class */ (function (_super) {
    __extends(Milenium, _super);
    function Milenium(containers) {
        var _this = _super.call(this, 'HyperDrive') || this;
        _this.cargoContainers = containers;
        return _this;
    }
    Milenium.prototype.jumpIntoHyperSpace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpIntoHyperSpace.call(this);
        }
        else {
            console.log("Falha");
        }
    };
    return Milenium;
}(baseShips_1.Spacecraft));
exports.Milenium = Milenium;
