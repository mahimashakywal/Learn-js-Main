// 1. Create an object called "myPet" with the following properties:
// name -> "Sudo"
// type -> "Dog"
// breed -> "Poodle"
// age -> 7 
// friends -> ["Bit", "Byte", "Data"]
const myPet={
    name1 :"Sudo",
    type :"Dog",
    breed : "Poodle",
    age : 7,
    friends : ["Bit", "Byte", "Data"]
};

// 2. Print out "myPet" to the terminal
console.log(myPet);

// 3. Add a new property: colour -> "Black" 
myPet.color= 'Black';

// 4. Change "breed" to be "Beagle" 
myPet.breed= 'Beagle';

// 5. Remove "Data" from the list of friends for "myPet"
const{friends}= myPet;
friends.pop('Data');

// 6. Print out "myPet" to the terminal again
console.log(myPet);

// 7. Add "Chip" to the list of friends for "myPet" 
friends.push('Chip');

// 8. Print out "myPet" to the terminal again
console.log(myPet);