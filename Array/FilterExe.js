// const characters = [
//     {
//         name: 'Luke Skywalker',
//         height: '172',
//         mass: '77',
//         eye_color: 'blue',
//         gender: 'male',
//     },
//     {
//         name: 'Darth Vader',
//         height: '202',
//         mass: '136',
//         eye_color: 'yellow',
//         gender: 'male',
//     },
//     {
//         name: 'Leia Organa',
//         height: '150',
//         mass: '49',
//         eye_color: 'brown',
//         gender: 'female',
//     },
//     {
//         name: 'Anakin Skywalker',
//         height: '188',
//         mass: '84',
//         eye_color: 'blue',
//         gender: 'male',
//     },
// ];

// // 1. Get characters with mass greater than 100

// const massMoreThan100 = characters.filter((ele, index, array) => ele.mass>100);
// console.log(massMoreThan100);

// // 2. Get characters with height less than 200

// const heightLessThan200 = characters.filter((ele, index, array) => ele.height<200);
// console.log(heightLessThan200);

// // 3. Get all male characters

// const males = characters.filter((ele, index, array) => ele.gender.toLowerCase()==='male');
// console.log(males);

// // 4. Get all female characters

// const females = characters.filter((ele, index, array) => ele.gender.toLowerCase()==='female');
// console.log(females);


// //  Sorting elements into odd and even.
// const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     const odd = input.filter((ele, index, array)=> ele%2 !==0);
//     console.log(odd);
//     const even = input.filter((ele, index, array)=> ele%2 ===0);
//     console.log(even);


// //  Sum of every positive element
//     const input1 = [1, -4, 12, 0, -3, 29, -150];
//     const positiveNumbers = input1.filter((ele, index, array) => ele>0);
//     let sum= 0;
//     for(let i= 0; i<positiveNumbers.length; i++){
//         sum+=positiveNumbers[i];
//     }
//     console.log(sum);

// // Check wheather number is divisible by 2 or not;
// const input2= [1, 2, 3, 4, 5];
// const divisibleBy2 = input2.filter((ele, index, array)=> ele%2);
// console.log (divisibleBy2);


// const myArray = [2,4,5,7,9,12,14];
// const array1 = myArray.fill(0);
// const myArray2 = [3,4,5,6,7,8,9,0];
// const array2 = myArray2.fill(0, 2);
// const myArray3 = [3,2,4,6,7,4,8,9,6];
// const array3 = myArray3.fill(0, 1, 3);
// console.log(array1);
// console.log(array2);
// console.log(array3);


// const arr = [2,4,5,7,9,12,14];
// console.log(arr.includes(4));
// console.log(arr.includes(2, 1));
// console.log(arr.includes(12, 2));
// console.log(arr.includes(18));


// const arr1 = [2,4,5,7,9,12,14];
// arr1.splice(2, 3);
// console.log(arr1);


// const arr2 = [2,4,5,7,9,12,14];
// const slicedArray = arr2.slice(2);
// console.log(slicedArray);


// const arr3 = [12, 55, 34, 65, 10];
// arr3.sort((a,b) => a - b);
// console.log(arr3);


// const arr4 = [3,4,5,1,3,6,5,7,8,5,6 ];
// const newArr4= arr4.map((arr, index, array) => arr*3);
// console.log(newArr4);


// const arr5 = [3,3,5,6,9,4,3,5,4,6,5,65,56];
// const newArr5 = (arr5.filter((num, index, array) => num%2 ===0)).reduce((acc, currentValue, index, array) => acc + currentValue, 0);
// console.log(newArr5);


// const products = [
//     { name: "Product 1", price: 20, category: "Electronics" },
//     { name: "Product 2", price: 30, category: "Clothes" },
//     { name: "Product 3", price: 40, category: "Electronics" },
//     { name: "Product 4", price: 50, category: "Clothes" },
//     { name: "Product 5", price: 60, category: "Clothes" },
//     { name: "Product 6", price: 70, category: "Electronics" },
//     { name: "Product 7", price: 80, category: "Clothes" },
//     { name: "Product 8", price: 90, category: "Electronics" },
//   ];
//   const productsByCategory = products.reduce((acc, product,index, array) => {
//     const category = product.category;
//     if (!acc[category]) {
//       acc[category] = [];
//     }
//     acc[category].push(product);
//     return acc;
//   }, {});
//   console.log(productsByCategory);


const users = [
    { id: 1, email: 'dcontreras@email.tld' },
    { id: 2, email: 'afeher@email.tld' },
    { id: 3, email: 'odj@email.tld' },
];
const profiles = [
    { userId: 1, firstName: 'Danielle', lastName: 'Contreras' },
    { userId: 2, firstName: 'Alfredas', lastName: 'Fehér' },
    { userId: 3, firstName: 'Orpheus', lastName: 'De Jong' },
];
const userProfiles = users.map((user, index, array) => {
    const profile = profiles.find((profile) => (user.id === profile.userId));
    return {...user,profile} ;
  });
console.log(userProfiles);


const users1 = [
    { firstName: "Susan", lastName: "Steward" },
    { firstName: "Daniel", lastName: "Longbottom" },
    { firstName: "Jacob", lastName: "Black" }
];

const userFullnames = users1.map((user, index, array) => `${user.firstName} ${user.lastName}`);
console.log(userFullnames);


const team = [
    {
        name: "aaron",
        position: "developer"
    },
    {
        name: "beth",
        position: "ui designer"
    },
    {
        name: "cara",
        position: "developer"
    },
    {
        name: "daniel",
        position: "content manager"
    },
    {
        name: "ella",
        position: "cto"
    },
    {
        name: "fin",
        position: "backend engineer"
    },
    {
        name: "george",
        position: "developer"
    },
];
const developers = team.filter(member => member.position === "developer");
console.log(developers);


const cities = [
    { name: 'Los Angeles', population: 3792621 },
    { name: 'New York', population: 8175133 },
    { name: 'Chicago', population: 2695598 },
    { name: 'Houston', population: 2099451 },
    { name: 'Philadelphia', population: 1526006 }
];
const bigCities = cities.filter(city => city.population > 3000000);
console.log(bigCities);


const citiPopulations = cities.sort((c1, c2) => c1.population - c2.population)
console.log(citiPopulations);


const citiPopulation = cities.map(city => `${city.name} : ${city.population}`);
console.log(citiPopulation);



const animals = [
    { name: "Jason", species: "rabbit" },
    { name: "Jessica", species: "dog" },
    { name: "Jacky", species: "owl" },
    { name: "Luke", species: "fish" },
    { name: "Junior", species: "rat" },
    { name: "Thomas", species: "cat" }
]

const dogs = animals.filter((animal ,index, array) => animals.species === "dog");
console.log(dogs);


const types = animals.map((animal, index, array) => animal.species);
console.log(types);


