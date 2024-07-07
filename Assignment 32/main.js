"use strict";
// Creating a Array of Current_users:
let Current_users = ["Rimsha", "Sehrish", "Mehak", "Hunain", "Kafeel"];
//Creating a Array of New_users:
let New_users = ["Dua", "Kainat", "rimsha", "Urwah", "Hunain"];
//Loop Through new_users to check for usernames availability:
New_users.forEach(new_one_user => {
    if (Current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_user.toLowerCase()))
        //Printing a Different Messages Using If-Else Statement:
        console.log(`Sorry ${new_one_user} is Already Taken!`);
    else {
        console.log(`This Username ${new_one_user} is Available`);
    }
});
