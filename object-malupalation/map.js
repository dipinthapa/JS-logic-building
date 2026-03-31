//Write a program that takes an array of objects representing students and returns an array of their names.


const students = [
    {name: 'dipin'},
    {name: 'thapa'}
] 

const studentName = students.map(student => student.name);
console.log(studentName)