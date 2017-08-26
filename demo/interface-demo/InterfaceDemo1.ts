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


