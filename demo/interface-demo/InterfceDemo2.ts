interface PersonalInfo{
	firstName: string
	lastName: string
	[otherProperty:string] :  any // For optional parameters
}

function RestParams(n1:string,...n2:string[]){

}

RestParams('a','b','c');

function RestaParamInterface(info:PersonalInfo){
	console.log(info.firstName);
	console.log(info.Age);

}

RestaParamInterface(<PersonalInfo>{
	firstName:'Mahesh'
	,lastName:''
	,email:''
	,Address:''
	,Age: 30
	,MyAddress:{city:'pune',pincode:111111}
})
