// Write a program that takes two arrays as input and merges them into a single array.
// [1,2,3] [4,5,6] -> [1,2,3,4,5,6]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const merged = [...arr1, ...arr2];
console.log(merged); // Output: [1, 2, 3, 4, 5, 6]
