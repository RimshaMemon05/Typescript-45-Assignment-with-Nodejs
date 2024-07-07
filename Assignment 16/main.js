"use strict";
let guestList = ["Rimsha Memon", "Shehriyar Memon", "Shahida Memon"];
//Printing The Statement
console.log("Great News! We found a bigger Table");
//Unshift
guestList.unshift("Sonia Memon");
//Splice
guestList.splice(Math.floor(guestList.length / 2), 0, "Mehwish Ali");
//push
guestList.push("Muhammad Hussain Memon");
console.log(guestList);
//foreach
//printing a New Invitation Message
guestList.forEach(guest => {
    console.log(`Dear ${guest}, You All Are Cordially Invited For Dinner`);
});
