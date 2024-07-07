//Tests for equality and inequality with strings.

const string1: string = "Hello"
const string2: string = "Rimsha"

console.log(string1===string2);
console.log(string1!==string2);

//Tests using the lower case function.

const upperCase: string = "RIMSHA"
const lowerCase: string = "rimsha"

console.log(upperCase.toLowerCase() === lowerCase);

/* Numerical tests involving equality and inequality, greater than and less than,
greater than or equal to , and less than or equal to.*/

const number1: number = 20;
const number2: number = 30;

console.log(number1===number2);
console.log(number1!==number2);

console.log(number1 > number2);
console.log(number1 < number2);

console.log(number1 >= number2);
console.log(number1 <= number2);

//Tests using "and" And "or" operators.

const a: number = 20;
const b: number = 40;
const c: number = 60;

console.log(a < b && c > b);
console.log(a > b || b < c  );

//Test whether an item is in a array.

const array1: number[] = [2, 4, 6, 8];
const itemToFind: number = 6;

console.log(array1.indexOf(itemToFind) !== -1);

//Test whether an item in not in a array.

const array2: number[] = [2, 4, 6, 8];
const item: number = 6;

console.log(array2.indexOf(12) === -1);

