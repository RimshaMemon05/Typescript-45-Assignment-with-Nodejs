"use strict";
//Tests for equality and inequality with strings.
Object.defineProperty(exports, "__esModule", { value: true });
const string1 = "Hello";
const string2 = "Rimsha";
console.log(string1 === string2);
console.log(string1 !== string2);
//Tests using the lower case function.
const upperCase = "RIMSHA";
const lowerCase = "rimsha";
console.log(upperCase.toLowerCase() === lowerCase);
/* Numerical tests involving equality and inequality, greater than and less than,
greater than or equal to , and less than or equal to.*/
const number1 = 20;
const number2 = 30;
console.log(number1 === number2);
console.log(number1 !== number2);
console.log(number1 > number2);
console.log(number1 < number2);
console.log(number1 >= number2);
console.log(number1 <= number2);
//Tests using "and" And "or" operators.
const a = 20;
const b = 40;
const c = 60;
console.log(a < b && c > b);
console.log(a > b || b < c);
//Test whether an item is in a array.
const array1 = [2, 4, 6, 8];
const itemToFind = 6;
console.log(array1.indexOf(itemToFind) !== -1);
//Test whether an item in not in a array.
const array2 = [2, 4, 6, 8];
const item = 6;
console.log(array2.indexOf(12) === -1);
