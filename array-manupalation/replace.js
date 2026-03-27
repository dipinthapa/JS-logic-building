// Write a program that takes an array of numbers as input and returns a new array with only the even numbers.
// [1,2,3,4,5,6,7,8,9] -> [2,4,6,8]

//using filter()
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenNubers = arr.filter((num) => num % 2 === 0);
console.log(evenNubers);

//using loop
const loopEven = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    loopEven.push(arr[i]);
  }
}
console.log(loopEven);

//using map and filter
const mapEven = arr
  .map((num) => (num % 2 === 0 ? num : null))
  .filter((num) => num !== null);
console.log(mapEven);
