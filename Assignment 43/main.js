"use strict";
//Define a function to print each magician name from an array:
function show_magician(magician) {
    magician.forEach(name => console.log(name));
}
//Making function of Magicians The great through .map() that it will modify array:
function make_great(magician) {
    return magician.map(name => `The Great ${name}`);
}
//Define an array of magician:
let magician_names = ["Harry Porter", "Azura", "Luminara"];
//Making a copy of original array through .slice() function:
let copy_magician_names = magician_names.slice();
//Modify the copied array to include "The Great" with their names:
let copy_great_magician = make_great(copy_magician_names);
//Show both arrays Original and Copied:
//Original
console.log("\nOriginal Array\n");
show_magician(magician_names);
//Copied
console.log("\nCopied Array\n");
show_magician(copy_great_magician);
