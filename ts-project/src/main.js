"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
document.getElementsByTagName("div")[0].innerHTML = "Hi from js";
require("JQuery");
$(document).ready(function () {
    $("div").click(function () {
        alert('hello');
    });
});
