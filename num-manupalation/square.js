// Write a program that takes a number as input and checks if it is a perfect square.


function isPerfectSquare(num) {
    if (num <= 0 || typeof num !== "number") {
        return false;
    }

    for (let i = 1; i * i <= num; i++) {
        if  (i * i === num) {
            return true;
        }
    }
    return false;
}

const number = 16;

console.log(`${number} is perfect squre: ${isPerfectSquare(number)}`)