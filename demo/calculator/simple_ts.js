// Make nullable using question mark to provide overriding of function
function Dosomething(val, val2, val3) {
    console.log('vlaue param call');
}
Dosomething(); //it will call last function 
Dosomething('adfdf'); // it will call last function 
// When you don't know how many parameters it is going to take
//Here you need to send by array 
//var myValue = [11,22,33,44]
//AnyInputParam(myValue)
function AnyInputParam(val) {
    console.log('value Param call');
}
// You can call this funciton as 
//AnyInputParamAsNoArray(1,2,3,4)
function AnyInputParamAsNoArray() {
    var val = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        val[_i] = arguments[_i];
    }
    console.log('Any input params as no array input');
}
AnyInputParamAsNoArray(1, 2, 3, 4);
// for default parameter 
function DefaultParam(var1, var2) {
    if (var2 === void 0) { var2 = 3; }
    console.log(var1);
    console.log(var2);
}
DefaultParam(11);
DefaultParam(11, 22);
function OverLoadded(val) {
}
OverLoadded(11);
OverLoadded(true);
//OverLoadded("myname");
