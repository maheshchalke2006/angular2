// Here T data type that we can define on creating object.
var QueueDemoGeneric = (function () {
    function QueueDemoGeneric() {
        this.list = [];
        this.list_1 = Array();
        this.list_2 = [];
    }
    QueueDemoGeneric.prototype.add = function (value) {
        this.list.push(value);
    };
    QueueDemoGeneric.prototype["delete"] = function () {
        return this.list.pop();
    };
    QueueDemoGeneric.prototype.read = function () {
        for (var i = 0; i < this.list.length; ++i) {
            console.log(this.list[i]);
        }
    };
    return QueueDemoGeneric;
}());
var result = new QueueDemoGeneric();
result.add('Mahesh');
console.log('Add operatin executed');
console.log(result.list);
result.add('Dinesh');
console.log('Add operatin executed');
console.log(result.list);
result.read();
console.log('Read operatin executed');
console.log(result.list);
result["delete"]();
console.log('Delete operatin executed');
console.log(result.list);
// Access it for number
var result1 = new QueueDemoGeneric();
result1.add(10);
// Access it for number and string
var result2 = new QueueDemoGeneric();
result2.add("Mahesh");
result2.add(10);
console.log(result2.list);
