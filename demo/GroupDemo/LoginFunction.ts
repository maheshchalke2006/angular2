namespace Login{ // Its deprecated function so use module 

//module Login{	 // module will do same functionality as namespace
	// In grouping you need to specify which can be used outside
	// Use keyword export to allow this 
	export function ValidateLogin(){

	}

	export function ChangePassword(){

	}

	//By declaring export you can use it outside
	export class Password{

	}
}

// This will give error as namespace is Login 
//ValidateLogin(); 
//ChangePassword();

// Access it by namespace / module name which is exported
Login.ValidateLogin();
Login.ChangePassword();
