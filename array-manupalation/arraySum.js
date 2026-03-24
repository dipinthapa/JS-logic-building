// Write a program that takes an array of numbers as input and returns the largest number.
// [4,2,6,8] -> 8


const given =[4,2,6,8]
function largestNum(num) {
    return Math.max(...num);
}

console.log(largestNum(given))

//with loop

function largestNumWithLoop(num) {
    let largest = num[0];

    for (let i = 1; i < num.length; i++) {
        if (num[i] > largest) {
            largest = num[i];
        }
    }
    return largest;
}

const arr = [2,4,6,8]

console.log(largestNumWithLoop(arr))