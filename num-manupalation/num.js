
//odd and even
let num = 50

const rem = num % 2  

if (rem === 0) {
    console.log(num + " is a even number")
}
else {
    console.log("ODD")
}

// Write a program that takes a number as input and checks if it is a prime number.
//3 -> 3 is a prime number

//prime number

let n = 17;
let isPrime = true;

if (n <= 1) {
    isPrime = false;
}
else {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(isPrime ? `${n} is a prime number.` : `${n} is not a prime number.`);




