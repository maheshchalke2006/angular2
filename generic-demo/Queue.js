var QueueDemo = (function () {
    function QueueDemo() {
        //We can declare array by following methods
        //list: string[]; // Its only decleared so no memory is assigned to variable list
        this.list = Array();
    }
    //list_1 = Array<string>();
    //list_2 = [];
    QueueDemo.prototype.add = function (value) {
        this.list.push(value);
    };
    QueueDemo.prototype["delete"] = function () {
        return this.list.pop();
    };
    QueueDemo.prototype.read = function () {
        for (var i = 0; i < this.list.length; ++i) {
            console.log(this.list[i]);
        }
    };
    return QueueDemo;
}());
var result = new QueueDemo();
result.add('Mahesh');
console.log('Add operatin executed');
console.log(result.list);
result.read();
console.log('Read operatin executed');
console.log(result.list);
result["delete"]();
console.log('Delete operatin executed');
console.log(result.list);
