"use strict";
//Define function of car with optional parameter:
function Create_Car(manufacturer, model, optional) {
    return Object.assign({ manufacturer,
        model }, optional);
}
//Call the function to create a car object:
const mycar = Create_Car("Toyota", "Corolla", { Color: "Black", Year: "2020" });
//Print the Value to Ensure all the information is stored correctly:
console.log(mycar);
