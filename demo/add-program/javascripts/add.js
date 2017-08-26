function calculate() {
    var first = document.getElementById('first').value;
    var firstAsString = document.getElementById('first').value.toString();
    console.log('Here');
    console.log(firstAsString);
    //var second = document.getElementsByName('second').value;
    var second = document.getElementById('second').value;
    var result = parseInt(first) + parseInt(second);
    alert('addition of ' + first + ' and ' + second + ' is ' + result);
}
calculate();
