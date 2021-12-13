"use strict";
// lesson11 Обработчики событий

let btn = document.getElementById('btn');
let e_btn = document.getElementById('e_btn');
let input = document.getElementById('text');
let input_range = document.getElementById('range');
let range_span = document.getElementById('range-span');

let square = document.getElementById('square');
let circle = document.getElementById('circle');

range_span.textContent = "50";

let inputValue;

e_btn.style.display = "none";

btn.onclick = function () {
    input = document.getElementById('text');
    inputValue = input.value;
    square.style.backgroundColor = inputValue;
    input.value = "";
};

input_range.oninput = function () {
    let input_range = document.getElementById('range');
    let circle = document.getElementById('circle');
    range_span.textContent = input_range.value;
    circle.style.width = input_range.value + '%';
};