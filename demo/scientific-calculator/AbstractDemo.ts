abstract class ScientificCalculator{
	Add(n1:number,n2:number){
		return n1 + n2;
	}
	Subtract(n1:number,n2:number){
		return n1 - n2;
	}
	Multiple(n1:number,n2:number){
		return n1 * n2;
	}	

	Division(n1:number,n2:number){
		return n1 / n2;
	}		

	//If you dont know logic of method then make it as abstract function
	abstract Sin(n1:number,n2:number);



}

class Nokia extends ScientificCalculator{
	//Implement function abstract method Sin
	Sin(n1:number,n2:number){ return 1 }	//return 1;
}

//client applicatino

var s = new Nokia();
var r = s.Add(11,12);
console.log(r);

r = s.Sin(11,12);
console.log(r) //




// Client appplication 
//You can not create object of abctact class or interface
/**
var s = new ScientificCalculator();
var r = s.Add(11,12);
console.log(r);
/**/



