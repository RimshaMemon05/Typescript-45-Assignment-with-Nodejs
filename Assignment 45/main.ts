//Creating a car object:
type car = {
    manufacturer: string
    model: string
    [key: string]: any;
}
//Define function of car with optional parameter:
function Create_Car(manufacturer: string, model: string, optional: Record<string, any>): car {
    return{
        manufacturer,
        model,
        ...optional
    }
}
//Call the function to create a car object:
const mycar: car = Create_Car("Toyota", "Corolla", { Color: "Black" , Year: "2020"})

//Print the Value to Ensure all the information is stored correctly:
console.log(mycar);
    
