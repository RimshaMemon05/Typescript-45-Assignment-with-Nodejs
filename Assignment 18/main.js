"use strict";
let placesTovisit = ["Saudia Arabia", "Dubai", "Switzerland", "London", "Paris", "Malaysia"];
//Printing array in original order
console.log("Original Order:", placesTovisit);
//Print array in alphabetical order without modifying the actuall list
console.log("Alphabetical Order:", placesTovisit.slice().sort());
//Array is still in original order by printing it
console.log("Original Order:", placesTovisit);
//Print array in reverse alphabetical method without changing the order of the original list
console.log("Reverse Alphabetical Order:", placesTovisit.slice().sort().reverse());
//Printing array that still in its original order
console.log("Original Order:", placesTovisit);
//Reverse the order of list. print the array to show that its order has changed.
console.log("Resverse Order Changed");
placesTovisit.reverse();
console.log(placesTovisit);
//Reverse the order of your list again.  Print the list to show its back to its original order.
console.log("Original Order:", placesTovisit.sort());
console.log(placesTovisit);
//Sort to change array so it's stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Reverse alphabetical order changed", placesTovisit.sort().reverse());
console.log(placesTovisit);
