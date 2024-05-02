// methods of Object

const name= 'mahima shakywal';
console.log(name);

// 1. length:
console.log(name);
const length= name.length; 
console.log(length);

// 2. at():
console.log(name);
const letter= name.at(3);
console.log(letter);

// 3. charAt():
console.log(name);
const char= name.charAt(7);
console.log(char);

// 4. charCodeAt():
console.log(name);
const char1= name.charCodeAt(5);
console.log(char1);

// 5. []:
console.log(name);
const char2= name[9];
console.log(char2);

// 6. slice():
console.log(name);
const sliced1= name.slice(3,8);
console.log(sliced1);

console.log(name);
const sliced2= name.slice(6);
console.log(sliced2);

console.log(name);
const sliced3= name.slice(-6,-3);
console.log(sliced3);

// 7. substring():
console.log(name);
const substring1= name.substring(5,9);
console.log(substring1);

console.log(name);
const substring2= name.slice(-7,-3);
console.log(substring2);

// 8. substr():
console.log(name);
const substr= name.substr(3,8);
console.log(substr);

// 9. toUpperCase():
console.log(name);
console.log(name.toUpperCase());

// 10. toLowerCase():
console.log(name);
console.log(name.toLowerCase());

// 11. concat():
const text1= "Mahima";
const text2= " Shakyawal";
console.log(text1);
console.log(text2);
console.log(text1.concat(text2));

// 12. trim():
const name1= '      Mahima Shakyawal       ';
console.log(name1);
console.log(name1.trim());

// 13. trimStart():
console.log(name1);
console.log(name1.trimStart());

// 14. trimEnd():
console.log(name1);
console.log(name1.trimEnd());

// 15.padStart():
const text3='5';
console.log(text3);
console.log(text3.padStart(5,'x'));

// 16. padEnd():
console.log(text3);
console.log(text3.padEnd(5,'x'));

// 17. repeat():
let text = "Jenis";
let result = text.repeat(2);
console.log(result);

// 18. replace():
console.log(name1);
console.log(name1.replace(' ','1'));

// 19. replaceAll():
console.log(name1);
console.log(name1.replaceAll(' ','1'));

// 20. split():
const name2='Mahima, shakaywal, Jenis';
console.log(name2);
console.log(name2.split(','));
console.log(name2.split());
console.log(name2.split(''));

// 21. indexOf():
console.log(name2);
console.log(name2.indexOf('ma'));
console.log(name2.indexOf('ma',3));

// 22. lastIndexOf():
console.log(name2);
console.log(name2.lastIndexOf('ma'));
console.log(name2.lastIndexOf('ma',3));

// 23. search():
console.log(name2);
console.log(name2.search('ma'));
console.log(name2);
console.log(name2.search('ma',3));

// OBJECT :
const information={
    name3:'ankit',
    id: 2,
    city:'bhopal',
};

const information1={
    name4:'smit',
    id2: 14,
    city1:'ahmedabad',
};

 const obj= Object.create(information);
 console.log(obj);

 const obj2 = Object.keys(information);
 console.log(obj2);

 const obj3 = Object.keys(information,information1);
 console.log(obj3);

 const obj4 = Object.values(information1);
 console.log(information, information1);

 console.log(Object.entries(information)) ;

 const obj5 = Object.assign(information);
 console.log(obj5);

 Object.freeze(information);
 information.name3= 'jenis';
 console.log(information);

 console.log(Object.isFrozen(information));

 Object.seal(information);
 information.name3= 'jenis';
 console.log(information);
 console.log(Object.isFrozen(information));

 Object.seal(information1);
 console.log(information1);
 information1.name4= 'jenis';
 console.log(information1);

 console.log(Object.isSealed(information1));

 const information3={
    name5:'ankit',
    id: 2,
    city:'bhopal',
};

 console.log(Object.is(information, information3));

 console.log(Object.is(information.name3, information3.name5));
 console.log(Object.is(information.name3, information1.name4));
 
 console.log(Object.getOwnPropertyDescriptor(information,'name3'));
 
 console.log(Object.getOwnPropertyDescriptors(obj5));

 console.log(Object.getOwnPropertyNames(obj5));

 








