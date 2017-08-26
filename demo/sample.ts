'use strict'
console.log("typescript donee");
class Employee{
}
var str : String;
str = 'a string data type';
var num : Number;
num = 10;
var bool : Boolean;
bool = false;
var globalVar = 'abc';
var anyDatatype  : any; // supports all like js
var unionDatatype : string|number;
unionDatatype = 'abc';
unionDatatype = 10;
//unionDatatype = false;
var tupleDatatype : [string,number,boolean]; // here in array what the data type should be is mentioned
tupleDatatype = ['abc',1.2,false];
//tupleDatatype = [1.2,false,'abc'];
enum color{
	red,gree,blue
}
var enumColor : color;
enumColor = color.blue;
var userDefinedDatatype : 'Mr.' | 'Miss';
userDefinedDatatype= 'Miss';
//userDefinedDatatype = "hi";
var arrayDatatype : number[];
var arrayDatatype2 : Array<number>;
arrayDatatype = [1,2,3];
arrayDatatype2 = [1,2,3];