const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// 1. Get an array of all names

const names= characters.map((ele, index, array)=> ele.name);
console.log(names);

// 2. Get an array of all heights

const heights= characters.map((ele, index, array)=> ele.height);
console.log(heights);

// 3. Get an array of objects with just name and height properties

const details= characters.map((ele, index, array) =>({name :ele.name, height: ele.height}));
console.log(details);

// 4. Get an array of all first names

const firstNames= characters.map((ele, index, array)=> ele.name.split(' ').at(0));
console.log(firstNames);


// Square the value of every element in the array.
const input = [1, 2, 3, 4, 5];
const square = input.map((ele, index, array)=> ele*ele);
console.log(square);


// Get name initials (Get first character of each name)
const input1 = "George Raymond Richard Martin";
const subStrs=input1.split(" ");
const initials= subStrs.map((ele, index, array) => ele[0]);
console.log(initials);


/* Find the difference in age between the oldest and youngest family members, 
and return their respective ages and the age difference. */
const input2 = [
    {
        name: "John",
        age: 13,
    },
    {
        name: "Mark",
        age: 56,
    },
    {
        name: "Rachel",
        age: 45,
    },
    {
        name: "Nate",
        age: 67,
    },
    {
        name: "Jennifer",
        age: 65,
    },
];
const ages= input2.map((ele, index, array) => ele.age)
console.log(ages);
const results = [Math.min(...ages), Math.max(...ages), Math.max(...ages)-Math.min(...ages)];
console.log(results);


//Numeronyms (Take first and last character and add count of remaining characters in between)
const input3 = "Every developer likes to mix kubernetes and javascript";
const words=input3.split(" ");
const subWords= words.map((ele, index, array) =>{ return ele.length<=3 ? ele : `${ele.at(0)}${ele.length-2}${ele.at(-1)}`});
const results1= subWords.join(' ');
console.log(results1);


/* Uppercase Strings
Task: Given an array of strings, create a new array with each string converted to uppercase.
Steps:
Declare an array of strings.
Use the map method to create a new array with uppercase strings. */

const strings= ['a', 'b', 'c', 'd', 'e'];
const upperCaseStrings= strings.map((ele, index, array)=> ele.toUpperCase());
console.log(upperCaseStrings);


/*  Square Even Numbers
    Task: Given an array of numbers, create a new array with only the square of even numbers.
    Steps:
    Declare an array of numbers.
    Use the map method with a conditional statement to filter and square even numbers.  */

const input4 = [1,2,3,4,5,6,7,8,9];
const evenNumbers1 = input4.filter((ele, index, array)=> ele%2===0);
const squareOfEvenNumbers1 = evenNumbers1.map((ele, index, array)=> ele*ele);
console.log(squareOfEvenNumbers1);


/*  Calculate Area of Rectangles
    Task: Given an array of rectangles with width and height, create a new array with the calculated area of each rectangle.
    Steps:
    Declare an array of rectangles (objects with width and height).
    Use the map method to create a new array with the calculated area for each rectangle.  */

const rectangles = [
    { width: 3, height: 5 },
    { width: 4, height: 8 },
    { width: 2, height: 6 }
    ];
const areaOfRectangle= rectangles.map((ele, index, array)=> ele.width*ele.height);
console.log(areaOfRectangle);


/*  Create HTML List
    Task: Given an array of items, create an HTML list using the map method.
    Steps:
    Declare an array of items.
    Use the map method to create an HTML list string.
    Output: '<ul><li>Apple</li><li>Banana</li><li>Cherry</li><li>Date</li></ul>'  */

const items = ['Apple', 'Banana', 'Cherry', 'Date'];
const itemsList = items.map((ele, index, array)=>{
        return `<li>${ele}<li/>`;
    } );
const listedItems = itemsList.join('');
console.log(`<ul>${listedItems}</ul>`);
