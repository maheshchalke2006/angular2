var Calculator = (function () {
    function Calculator() {
    }
    Calculator.prototype.Add = function (n1, n2) {
        return n1 + n2;
    };
    Calculator.prototype.Substraction = function (n1, n2) {
        return n1 - n2;
    };
    Calculator.prototype.Multi = function (n1, n2) {
        return n1 * n1;
    };
    Calculator.prototype.Division = function (n1, n2) {
        return n1 / n2;
    };
    return Calculator;
}());
var x = 10;
var obj1 = new Calculator();
var result = obj1.Add(11, 22);
//var result = obj1.Substraction('a','b');  // We can not pass string as data type is number
//var result = obj1 
