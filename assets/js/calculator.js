const addBtn = document.querySelector('.addBtn');
const subBtn = document.querySelector('.subtractBtn');
const mulBtn = document.querySelector('.multiplyBtn');
const divBtn = document.querySelector('.divideBtn');
const maxBtn = document.querySelector('.maxBtn');
const minBtn = document.querySelector('.minBtn');
const aveBtn = document.querySelector('.aveBtn');
const sqrBtn = document.querySelector('.sqrBtn');
const num1 = document.querySelector('#num1');
const result = document.querySelector('.res');

addBtn.addEventListener('click', addition);
subBtn.addEventListener('click', subtraction);
mulBtn.addEventListener('click', multiplication);
divBtn.addEventListener('click', division);
maxBtn.addEventListener('click', maximum);
minBtn.addEventListener('click', minimum);
aveBtn.addEventListener('click', average);
sqrBtn.addEventListener('click', square);

function addition(e) {
    let sum = 0;
    let a = new Array();
    a.push(num1.value.split(' '));
    a[0].forEach(element => {
        sum += Number(element);
    });
    result.textContent = `The sum of the numbers ${a[0]} is ${sum}`;
}

function multiplication(e){
    let product = 1;
    let a = new Array();
    a.push(num1.value.split(' '));
    a[0].forEach(element => {
        product += Number(element);
    });
    result.textContent = `The product of the numbers ${a[0]} is ${product}`;
}

function division(e) {
    let a = new Array();
    a.push(num1.value.split(' '));
    let num = a[0];
    let value = (num[1] != 0) ? num[0]/num[1] : 'undefined';
    result.textContent =`The quotient of the numbers ${num[0]} and ${num[1]} is ${value}`;
}

function subtraction(e) {
    let a = new Array();
    a.push(num1.value.split(' '));
    let num = a[0];
    result.textContent = `The difference between the numbers ${num[0]} and ${num[1]} is ${Number(num[0]) - Number(num[1])}`;
    
}

function maximum(e){            
    let a = new Array();
    a.push(num1.value.split(' '));
    let num = a[0];
    let maxValue = num[0];
    num.forEach(element => {
        maxValue = (element > maxValue) ? element : maxValue;
    });
    result.textContent = `The maximum value from the list ${num} is ${maxValue}`;
}

function minimum(e){            
    let a = new Array();
    a.push(num1.value.split(' '));
    let num = a[0];
    let minValue = num[0];
    num.forEach(element => {
        minValue = (element < minValue) ? element : minValue;
    });
    result.textContent = `The minimum value from the list ${num} is ${minValue}`;
}

function average(e) {
    let elementsSum = 0;
    let a = new Array();
    a.push(num1.value.split(' '));
    let num = a[0];
    num.forEach(element => {
        elementsSum += Number(element);
    });
    result.textContent = `The average of the list ${num} is ${elementsSum / num.length}`;
}

function square(e) {
    let a = new Array();
    a.push(num1.value.split(' '));
    let num = a[0];
    result.textContent = `The square of the number ${num[0]} is ${num[0]**2}`;
  
}