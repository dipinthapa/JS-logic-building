// Write a program that takes a number as input and calculates its factorial.
//  4 -> 4*3*2*1 -> 24

function fact(n) {
    let res = 1;
    while (n > 1) {
        res *= n;
        n--;
    }
    return res;
}
console.log(fact(4))