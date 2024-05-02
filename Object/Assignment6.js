// 1. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
const student1 = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};

console.log(student1);
delete student1.rollno;
console.log(student1);