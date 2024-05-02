// que :   1. Create an object called "mexico" with the following properties:
// id -> 24
// name -> "Mexico"
// capital -> "Mexico City"
// neighbours -> ["USA", "Guatemala", "Belize"]

const mexico = {
    id : 24,
    name1 : "Mexico",
    capital : "Mexico City",
    neighbours : ["USA", "Guatemala", "Belize"]
}

//  1. Print out "mexico" to the terminal
console.log(mexico);

// 2. Change "id" to be 25
mexico.id=25;

// 3. Add "Honduras" to the list of neighbours to "mexico"
const{neighbours} = mexico;
neighbours.push("Honduras");

// 4. Print out "mexico" to the terminal again'
console.log(mexico);