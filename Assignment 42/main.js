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
//Call the make_great function to modify megician names:
let great_magicians = make_great(magician_names);
//Call the show_magicians function that show modify list of magicians:
show_magician(great_magicians);
