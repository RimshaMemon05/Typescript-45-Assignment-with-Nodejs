"use strict";
//Creating a Array:
let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Using For-loop:
for (let oneNumber of Numbers) {
    let ordinalEnding;
    if (oneNumber === 1) {
        ordinalEnding = "st";
    }
    else if (oneNumber === 2) {
        ordinalEnding = "nd";
    }
    else if (oneNumber === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    //Printing a Message:
    console.log(`${oneNumber}${ordinalEnding}`);
}
;
