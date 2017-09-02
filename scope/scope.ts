//If you define a variable the function will be limited to function and class only.
//let defines scope in block.

var x = 10;
if(true){
	let y = 20; // let will define scope of code so it will be limited only in if condition 
}


//console.log(y); //It will give error cannot fine name 'y' as we have defined variable with let keyword.
var i = 0;
{
let i = 0; // It will allow to decleare as it have another scope
}
for(let i=0;i<5;i++){
	console.log(i);
}


console.log(i); //It will give error cannot fine name 'i' as we have defined i with keyword let

const z =10;
//z=20; //Will give error because its constant.

console.log('----------------------------');
for(var j = 0; j < 5; j++){
	console.log(j);
}

/** print output after 2 second **/
console.log("Print output after 2 second")

for(let j = 0; j < 5; j++){

	setTimeout(function(){
		console.log(j);
	},5000)
}