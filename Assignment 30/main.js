"use strict";
//Creating a Array
let userNames = ["Rimi", "Admin", "Saqlain", "Noor", "Urwah"];
// Using ForEach Loop on Array:
userNames.forEach(OneUser => {
    if (OneUser === "Admin") {
        console.log(`Hello ${OneUser}, Would You Like to See a Status Report`);
    }
    else
        console.log(`Hello ${OneUser}, Thankyou For Logging in Again`);
});
