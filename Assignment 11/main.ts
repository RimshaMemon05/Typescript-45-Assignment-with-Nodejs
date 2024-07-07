// Defines an array of names

let names:string[] = ["Saqlain", "Rimsha", "Sonia", "Urwah", "Noor", "Mehwish"];

// loop
// for each
// for of loop

// loop
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
    
}
    
// for each

names.forEach(friend => {
    console.log(friend);
    
});

// for of loop

for (let friendName of names) {
    console.log(friendName);
    
}