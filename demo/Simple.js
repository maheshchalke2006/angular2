<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-widh", inital-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
	</head>
	<body>
		<script >
			function Dosomething(){
				console.log('null param call')
			}

			function Dosomething(val){
				console.log('vlaue param call')
			}

			Dosometing(); //it will call last function 
			Dosometing('adfdf'); // it will call last function 
			
		</script>


	</body>
</html>