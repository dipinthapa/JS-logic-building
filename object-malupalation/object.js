//Write a program that creates an object representing a person with properties like name, age, and gender.

const person = {
    name: "Dipin",
    age: "25",
    gender: "male"
};
console.log(person)

//using new  object()

const human =new Object();
human.name = 'Thapa';
human.age = '23';
human.gender = 'male';

console.log(human)

//using function
function createPrson(name, age, gender) {
    return {
        name: name,
        age: age,
        gender: gender

    };
}

const person1 = createPrson('aaaa', 11, 'm');
const person2 = createPrson('dddd', 22, 'F');
console.log(person1);
console.log(person2);