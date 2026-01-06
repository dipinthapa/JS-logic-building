// String Manipulation: 
// Write a program that takes a string as input and converts it to uppercase.
// apple -> APPLE

let string = "apple";
console.log(string.toUpperCase())

// Write a program that takes a string as input and counts the number of words in it.

let countThis = "apple";
console.log(countThis.length)

//Write a program that takes a string as input and reverses it

const reverseString = (str) => str.split('').reverse().join('');

console.log(reverseString("Apple")); 
 
//alternative
function reverse() {
    const convertToArray = str.split('');
    convertToArray.reverse();
    const reversedStr = convertToArray.join('');
    return reversedStr;
}

const givenString = "Apple";
const result = reverseString(givenString);
console.log(result)