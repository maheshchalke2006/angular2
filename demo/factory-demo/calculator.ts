// Example for calculator to use Factory pattern
interface ICal{
	Result(a,b);
}

class Add implements ICal{
	Result(a,b){
		return a + b;
	}
}

class Subtract implements ICal{
	Result(a,b){
		return a - b;
	}
}

class Cal_Factory{
	getObject(className:string){
		if(className == "Add"){
			return new Add()
		}
		else if(className == "Subtract"){
			return new Subtract()
		}
		else{
			return null;
		}		
	}
}

//Client side application 
var c = new Cal_Factory();
var r = c.getObject('Add').Result(22,2);
console.log(r) //24

r = c.getObject('Subtract').Result(22,2);
console.log(r) //20
