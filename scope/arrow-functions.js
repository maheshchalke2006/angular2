function add(n1, n2) {
    return n1 + n2;
}
// Add function can be written as lambda express as follows
// Advantage of lambda express is it preserves context of variables.
var add_lambda = function (n1, n2) {
    return n1 + n2;
};
function subtract(n1, n2) {
    return n1 - n2;
}
var subtract_lambda = function (n1, n2) {
    return n1 - n2;
};
// Both function calls will give same output as follows
console.log(add(10, 10));
console.log(add_lambda(10, 10));
console.log(subtract(10, 10));
console.log(subtract_lambda(10, 10));
