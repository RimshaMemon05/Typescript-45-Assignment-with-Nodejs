"use strict";
// Assignment # 2
//storing a person name in a variable
let personName = "Rimsha Memon";
//printing a person name in lowercase
console.log("Lowercase:", personName.toLowerCase());
//printing a person name in uppercase
console.log("Uppercase:", personName.toUpperCase());
//printing a person name in titlecase
console.log("Titlecase:", personName.replace(/\b\w/g, c => c.toUpperCase()));
