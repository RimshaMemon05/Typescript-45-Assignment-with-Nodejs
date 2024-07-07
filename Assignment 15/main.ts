let guestList:string[] = ["Rimsha Memon", "Muhammad Hussain Memon", "Shahida Memon"];

// Print the name who can't make Dinner

let unableAttend: string | undefined  = guestList.splice(1,1)[0];

console.log(`${unableAttend} can't make dinner`);

// push

guestList.push("Sheriyar Memon");

// print a message

guestList.forEach(guest => {
    console.log(`Dear ${guest}, You Are Cordially invited for dinner`);
    
});
