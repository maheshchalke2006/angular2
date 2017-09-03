//systemjs.config.js
//IFFI Function (Self called function)
(function(){
	System.config({
		map:{
			app:"src",
			"JQuery":"node_modules/jquery/dist/jquery.js"
		},
		packages:{
			app:{
				main:"./main.js"
			}
		}
	})
})(this);
