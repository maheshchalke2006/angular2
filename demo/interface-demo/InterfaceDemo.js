//Guideline - if you are using more than 5 arguments use model and use it
function UserRegistration(userName, firstName, lastName) {
}
UserRegistration('username', 'h', 'c');
/**/
/**/
var UserInfo_Class = (function () {
    function UserInfo_Class() {
    }
    return UserInfo_Class;
}());
/**/
function UserRegistration_2(info) {
}
function UserRegistration_Class(info) {
}
//Get values from interface - will create objec of interface "UserInfo"
var userInfo_1 = {
    userName: 'maheshchalke',
    firstName: 'Mahesh'
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
UserRegistration_2({ userName: 'Mahesh', firstName: 'Mahesh' });
/**/
