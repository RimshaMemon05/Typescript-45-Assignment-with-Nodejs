//Creating a Function of Shirts:
function make_shirts(Size: string = "Large", Text: string = "I Love TypeScript") {
    console.log(`Creating a ${Size} size shirt With ${Text} prints on shirt`);
}
//Calling the Function with by_default message:
make_shirts();

//Calling a Function now with Medium Size and default message:
make_shirts("Medium");

//Calling a Function now with Small Size and Also print different message:
make_shirts("Small", "I Love JavaScript");