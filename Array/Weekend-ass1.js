const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
]; 


console.log('-----------MAP-----------');

//1. Get array of all names
const names = characters.map((character, index, array) => character.name);
console.log(names);

//2. Get array of all heights
const heights = characters.map((character, index, array) => character.height);
console.log(heights);

//3. Get array of objects with just name and height properties
const namesAndHeights = characters.map(({name, height}) => ({ name, height}) );
console.log(namesAndHeights);

//4. Get array of all first names
const firstNames = characters.map((character , index, array) => character.name.split(' ').at(0));
console.log(firstNames);


console.log('-----------REDUCE-----------');

//1. Get total mass of all characters
const totalMass = characters.reduce((acc, character, index, array) => {
    acc += character.mass;
    return acc;
  }, 0);
console.log(totalMass);

//2. Get total height of all characters
const totalHeight = characters.reduce((acc, character, index, array) => {
    acc += character.height;
    return acc;
  }, 0);
console.log(totalHeight);

//3. Get total number of characters by eye color
const eyeColors = characters.reduce((acc , character, index, array) => {
  if(acc[character.eye_color]){
    acc[character.eye_color] +=1;
  }  else{
    acc[character.eye_color] = 1;
  };
  return acc;
}, {});
console.log(eyeColors);

//4. Get total number of characters in all the character names



console.log('-----------FILTER-----------');

//1. Get characters with mass greater than 100
const massMoreThan100 = characters.filter((ele, index, array) => ele.mass>100);
console.log(massMoreThan100);

//2. Get characters with height less than 200
const heightLessThan200 = characters.filter((ele, index, array) => ele.height<200);
console.log(heightLessThan200);

//3. Get all male characters
const males = characters.filter((ele, index, array) => ele.gender.toLowerCase()==='male');
console.log(males);

//4. Get all female characters
const females = characters.filter((ele, index, array) => ele.gender.toLowerCase()==='female');
console.log(females);


console.log('-----------SORT-----------');

//1. Sort by mass
const sortedByMass = characters.sort((character1, character2, index, array) => character1.mass - character2.mass);
console.log(sortedByMass);

//2. Sort by height
const sortedByHeight = characters.sort((character1, character2, index, array) => character1.height - character2.height);
console.log(sortedByHeight);

//3. Sort by name
const sortedByName = characters.sort((character1, character2, index, array) => character1.name.localeCompare(character2.name));
console.log(sortedByName);

//4. Sort by gender
const sortedByGender = characters.sort((character1, character2, index, array) => character1.gender.localeCompare(character2.gender));
console.log(sortedByGender);


console.log('-----------EVERY-----------');

//1. Does every character have blue eyes?
const blueEyes = (characters.every((character , index, array) => character.eye_color === 'blue'));
console.log(blueEyes);

//2. Does every character have mass more than 40?
const massMorethan40 = (characters.every((character , index, array) => character.mass > 40));
console.log(massMorethan40 );

//3. Is every character shorter than 200?
const lessthan200 = (characters.every((character , index, array) => character.height < 200));
console.log(lessthan200);

//4. Is every character male?
const allMale = (characters.every((character , index, array) => character.gender === 'male'));
console.log(allMale);


console.log('-----------SOME-----------');

//1. Is there at least one male character?
const anyMale = characters.some((character, index, array) => character.gender === 'male');
console.log(anyMale);

//2. Is there at least one character with blue eyes?
const anyBlueEyes = characters.some((character, index, array) => character.eye_color === 'blue');
console.log(anyBlueEyes);

//3. Is there at least one character taller than 210?
const anyTallerThan210 = characters.some((character, index, array) => character.height > 200);
console.log(anyTallerThan210);

//4. Is there at least one character that has mass less than 50?
const anylessThan50 = characters.some((character, index, array) => character.mass < 50);
console.log(anylessThan50);