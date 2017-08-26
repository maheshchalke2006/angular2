function RestParams(n1) {
    var n2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        n2[_i - 1] = arguments[_i];
    }
}
RestParams('a', 'b', 'c');
function RestaParamInterface(info) {
    console.log(info.firstName);
    console.log(info.Age);
}
RestaParamInterface({
    firstName: 'Mahesh',
    lastName: '',
    email: '',
    Address: '',
    Age: 30,
    MyAddress: { city: 'pune', pincode: 111111 }
});
