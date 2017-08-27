//namespace Login{ // Its deprecated function so use module 
var Login;
(function (Login) {
    // In grouping you need to specify which can be used outside
    // Use keyword export to allow this 
    function ValidateLogin() {
    }
    Login.ValidateLogin = ValidateLogin;
    function ChangePassword() {
    }
    Login.ChangePassword = ChangePassword;
    //By declaring export you can use it outside
    var Password = (function () {
        function Password() {
        }
        return Password;
    }());
    Login.Password = Password;
})(Login || (Login = {}));
Login.ValidateLogin();
Login.ChangePassword();
