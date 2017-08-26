var Add = (function () {
    function Add() {
    }
    Add.prototype.Result = function (a, b) {
        return a + b;
    };
    return Add;
}());
var Subtract = (function () {
    function Subtract() {
    }
    Subtract.prototype.Result = function (a, b) {
        return a - b;
    };
    return Subtract;
}());
var Cal_Factory = (function () {
    function Cal_Factory() {
    }
    Cal_Factory.prototype.getObject = function (className) {
        if (className == "Add") {
            return new Add();
        }
        else if (className == "Subtract") {
            return new Subtract();
        }
        else {
            return null;
        }
    };
    return Cal_Factory;
}());
//Client side application 
var c = new Cal_Factory();
var r = c.getObject('Add').Result(22, 2);
console.log(r); //24
r = c.getObject('Subtract').Result(22, 2);
console.log(r); //20
