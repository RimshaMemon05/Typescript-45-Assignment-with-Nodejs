"use strict";
//Creating a Array
let userNames = ["Rimi", "Admin", "Saqlain", "Noor", "Urwah"];
// Remove All the Values from Array NowOur Array is Empty.
userNames = [];
// If Statement for checking Length of Our Array is Empty?
if (userNames.length === 0) {
    console.log("Your Array is Empty We need To Find some Users!");
}
else {
    // Using ForEach Loop on Array For checking If Array is not Empty:
    userNames.forEach(OneUser => {
        if (OneUser === "Admin") {
            console.log(`Hello ${OneUser}, Would You Like to See a Status Report`);
        }
        else {
            console.log(`Hello ${OneUser}, Thankyou For Logging in Again`);
        }
    });
}
