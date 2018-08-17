"use strict";
exports.__esModule = true;
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntoHyperSpace = function () {
        console.log("Entrar no hyperspace com " + this.propulsor);
    };
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;
