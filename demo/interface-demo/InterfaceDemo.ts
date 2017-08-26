//Guideline - if you are using more than 5 arguments use model and use it
function UserRegistration(
	userName:string
	,firstName:string
	,lastName:string
	){

}

UserRegistration('username','h','c');

/**/
//User interfaces when you are using model as it will be easy to manage code
interface UserInfo{
	userName: string
	firstName: string
	lastName?: string // Make property nullable or make it as optional
}
/**/


/**/
class UserInfo_Class{
	userName: string
	firstName: string
	lastName: string
}
/**/

function UserRegistration_2(info:UserInfo){

}

function UserRegistration_Class(info:UserInfo_Class){

}

//Get values from interface - will create objec of interface "UserInfo"
var userInfo_1 = <UserInfo>{
	userName: 'maheshchalke'
	,firstName: 'Mahesh'	
	//,lastName: 'C'
};

UserRegistration_2(userInfo_1);

//UserRegistration_2(userInfo);

//you can pass interface using inline code like 
/**
UserRegistration_2(<UserInfo>{
	firstName: 'Mahesh'	
	,lastName: 'C'
	,userName: 'maheshchalke'	
});
/**/

//you can pass interface using inline code like 
/**
UserRegistration_2(<UserInfo>{firstName: 'Mahesh',lastName: 'C',userName: 'maheshchalke'});
/**/

/**/
// Will give error for otpinal parameter
UserRegistration_2({userName:'Mahesh',firstName:'Mahesh'})
/**/
