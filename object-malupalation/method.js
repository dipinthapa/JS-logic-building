//Write a program that takes an object representing a student with properties like name and grades, and calculates their average grade.
//[{name: Sudarshan, marks: 40}, {name: suraj, marks: 100}, {name: simran, marks: 100}]
//	-> Average is 80

const students = [
    {name: 'Sudarshan', marks: 40},
    {name: 'suraj', marks: 100}, 
    {name: 'simran', marks: 100}   
];

const total= students.reduce((acc, student) => {
    return acc + student.marks;
}, 0);

const average = total / students.length;
console.log(average);