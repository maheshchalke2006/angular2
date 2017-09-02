class QueueDemo{

	//We can declare array by following methods
	//list: string[]; // Its only decleared so no memory is assigned to variable list
	list = Array<string>();
	//list_1 = Array<string>();
	//list_2 = [];

	add(value:string){
		this.list.push(value);
	}

	delete(): string {
		return this.list.pop();
	}

	read(){
		for(var i = 0; i < this.list.length; ++i){
			console.log(this.list[i]);
		}
	}
}

var result = new QueueDemo();

result.add('Mahesh');
console.log('Add operatin executed');
console.log(result.list);

result.read();
console.log('Read operatin executed');
console.log(result.list);

result.delete();
console.log('Delete operatin executed');
console.log(result.list);


