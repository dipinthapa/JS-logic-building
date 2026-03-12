// Write a program that takes an array of numbers as input and returns the sum of all the numbers.
//[1,2,3] -> 6

function sum(numArray) {
    let add = 0;
    for (let a = 0; a < numArray.length; a++) {
        let Addindex = numArray[a];
        add += Addindex;
    }
    return add;
}
console.log(sum([1,2,3]))