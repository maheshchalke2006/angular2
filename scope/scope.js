//If you define a variable the function will be limited to function and class only.
//let defines scope in block.
var x = 10;
if (true) {
    var y = 20; // let will define scope of code so it will be limited only in if condition 
}
//console.log(y); //It will give error cannot fine name 'y' as we have defined variable with let keyword.
var i = 0;
{
    var i_1 = 0; // It will allow to decleare as it have another scope
}
for (var i_2 = 0; i_2 < 5; i_2++) {
    console.log(i_2);
}
console.log(i); //It will give error cannot fine name 'i' as we have defined i with keyword let
var z = 10;
//z=20; //Will give error because its constant.
console.log('----------------------------');
for (var j = 0; j < 5; j++) {
    console.log(j);
}
/** print output after 2 second **/
console.log("Print output after 2 second");
var _loop_1 = function (j_1) {
    setTimeout(function () {
        console.log(j_1);
    }, 5000);
};
for (var j_1 = 0; j_1 < 5; j_1++) {
    _loop_1(j_1);
}
