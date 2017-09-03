document.getElementsByTagName("div")[0].innerHTML = "Hi from js";  

import "JQuery";  

$(document).ready(function(){
	$("div").click(function(){
		alert('hello');
	})
});



