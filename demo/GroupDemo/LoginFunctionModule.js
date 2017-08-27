//namespace Login{ // Its deprecated function so use module 
var LoginModule;
(function (LoginModule) {
    // In grouping you need to specify which can be used outside
    // Use keyword export to allow this 
    function ValidateLogin() {
    }
    LoginModule.ValidateLogin = ValidateLogin;
    function ChangePassword() {
    }
    LoginModule.ChangePassword = ChangePassword;
    //By declaring export you can use it outside
    var Password = (function () {
        function Password() {
        }
        return Password;
    }());
    LoginModule.Password = Password;
})(LoginModule || (LoginModule = {}));
// This will give error as namespace is Login 
//ValidateLogin(); 
//ChangePassword();
// Access it by namespace / module name which is exported
//Login.ValidateLogin();
//SLogin.ChangePassword();
