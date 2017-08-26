class Calculator
{
	Add(n1:number,n2:number){
		return n1 + n2;
	}

	Substraction(n1:number,n2:number){
		return n1 - n2;
	}

	Multi(n1:number,n2:number){
		return n1 * n1;
	}

	Division(n1:number,n2:number){
		return n1 / n2;
	}

}

	var x = 10;

	var obj1 = new Calculator();

	var result = obj1.Add(11,22);

	//var result = obj1.Substraction('a','b');  // We can not pass string as data type is number


	//var result = obj1