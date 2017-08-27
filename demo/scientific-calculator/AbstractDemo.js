var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ScientificCalculator = (function () {
    function ScientificCalculator() {
    }
    ScientificCalculator.prototype.Add = function (n1, n2) {
        return n1 + n2;
    };
    ScientificCalculator.prototype.Subtract = function (n1, n2) {
        return n1 - n2;
    };
    ScientificCalculator.prototype.Multiple = function (n1, n2) {
        return n1 * n2;
    };
    ScientificCalculator.prototype.Division = function (n1, n2) {
        return n1 / n2;
    };
    return ScientificCalculator;
}());
var Nokia = (function (_super) {
    __extends(Nokia, _super);
    function Nokia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Nokia.prototype.Sin = function (n1, n2) { return 1; }; //return 1;
    return Nokia;
}(ScientificCalculator));
//client applicatino
var s = new Nokia();
var r = s.Add(11, 12);
console.log(r);
r = s.Sin(11, 12);
console.log(r); //
// Client appplication 
//You can not create object of abctact class or interface
/**
var s = new ScientificCalculator();
var r = s.Add(11,12);
console.log(r);
/**/
