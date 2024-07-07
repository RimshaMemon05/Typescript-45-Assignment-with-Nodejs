"use strict";
//Define a function with a rest parameter:
function makeSandwich(...items) {
    console.log("\nMaking a Sandwich With These items:");
    items.forEach(singleItem => console.log("-" + singleItem));
    console.log("Now You Enjoy The Sandwich");
}
//Call the funtions of 3 items With Different number of arguments:
makeSandwich("Ketchup", "Chicken", "Mayo", "Egg");
makeSandwich("Bread", "Jam");
makeSandwich("Bread", "Butter", "Cheese", "Chicken", "Cacumber", "Cabage", "Mayo");
