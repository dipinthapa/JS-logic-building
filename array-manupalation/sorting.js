// Write a program that takes an array of strings as input and sorts them alphabetically.
// [d,e,f,a] -> [a,d,e,f]


const sortMethod = (arr) => {
    arr.sort();
    return arr;
};

const sample = ['d', 'e', 'f', 'a'];
console.log(sortMethod(sample))


// bubble sorting

const arr = ['d', 'e', 'f', 'a'];

for (let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr);