"use strict";
//Define a function to print each magician name from an array:
function show_magician(magician) {
    magician.forEach(name => console.log(name));
}
//Define an array of magician:
let magician_names = ["Harry Porter", "Azura", "Luminara"];
//Call the function to print each magician name:
show_magician(magician_names);
