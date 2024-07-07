// Define an array of names

let names: string[] = ["Saqlain", "Rimsha", "Sonia", "Urwah", "Noor", "Mehwish"];

// loop
// for each
// for of loop

// loop
for (let i = 0; i < names.length; i++) {
  
  // Printing a message in ( loop Method )
  
    console.log(`Hello, ${names[i]}! How Are You Today?`);
    
}

// for each
names.forEach(friend => {

    // Printing a message in ( for each Method )

  console.log(`Hi, ${friend}! How Are You Today?`);
    
});

// for of loop
for (let friendName of names) {
   
   // Printing a message in ( for of loop Method )
   
    console.log(`Dear, ${friendName}! How Are You?`);
    
}