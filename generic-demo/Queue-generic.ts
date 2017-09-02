// Here T data type that we can define on creating object.
class QueueDemoGeneric<T>{

	list: T[] = [];
	list_1 = Array<string>();
	list_2 = [];

	add(value:T){
		this.list.push(value);
	}

	delete(): T {
		return this.list.pop();
	}

	read(){
		for(var i = 0; i < this.list.length; ++i){
			console.log(this.list[i]);
		}
	}
}

var result = new QueueDemoGeneric<string>();

result.add('Mahesh');
console.log('Add operatin executed');
console.log(result.list);

result.add('Dinesh');
console.log('Add operatin executed');
console.log(result.list);

result.read();
console.log('Read operatin executed');
console.log(result.list);

result.delete();
console.log('Delete operatin executed');
console.log(result.list);

// Access it for number
var result1 = new QueueDemoGeneric<number>();
result1.add(10);

// Access it for number and string
var result2 = new QueueDemoGeneric<string | number>();
result2.add("Mahesh");
result2.add(10);

console.log(result2.list);





