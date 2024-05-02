// 1. Write a JavaScript program to list the properties of a JavaScript object.
const student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};

console.log(Object.getOwnPropertyNames(student));
console.log(Object.keys(student));