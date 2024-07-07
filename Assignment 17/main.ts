let guestlist: string[] = ["Rimsha Memon", "Shariyar Memon", "Shahida Memon"];

//print a message 
console.log("Unfortunately! The New Dinner Table won't arrive So we can invite only 2 guest ");

guestlist.unshift("Saqlain Sheikh", "Fawad Ali Langah");

//print message of updated list
console.log("Updated List Of Guest", guestlist);

//removed guest from the list
while (guestlist.length > 2) {
    let removedGuest: string | undefined = guestlist.pop();
    if (removedGuest !== undefined) {
    console.log(`SORRY ${removedGuest}, we can't invite you`);          
}
}

//Print a message to each of the two people still on your list, letting them know they are still invited

guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you both are invited for Dinner`);
});

//remove 2 names from the list
guestlist.splice(0, guestlist.length);

//Print updatedempty list
console.log("Updated Empty List Of Guest", guestlist);

