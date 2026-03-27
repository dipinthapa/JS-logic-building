// Write a program that takes an array of numbers as input and removes all duplicates.
// [a,a,b,d,e,e,f] -> [a.b.d.e.f]

const arr = ["a", "a", "b", "d", "e", "e", "f"];
 
//using set method
const unique = [...new Set(arr)];
 console.log(unique);


 //using filter()
 const filterUnique = arr.filter((item, index) => {
    return arr.indexOf(item) === index;
 })

 console.log(filterUnique)

 //Using loop

const loopUnique = [];
 
for (let i = 0; i < arr.length; i++) {
    if (!loopUnique.includes(arr[i])) {
        loopUnique.push(arr[i]);
    }
}
console.log(loopUnique)