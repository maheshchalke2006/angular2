	function calculate(){
		var first = document.getElementsByName('first').value;
		var second = document.getElementsByName('second').value;

		alert(first);

		var result = first + second;
		alert('addition of ' + first + ' and ' + second + ' is ' + result);
	}