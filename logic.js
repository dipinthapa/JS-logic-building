/* Put salary as name of the variable and do the following tasks.
1. if salary is greater than 100000, print "buy an iphone"
2. if salary is less than or equal to 50000 and greater than 30000, print "buy mi phone"
3. if salary is less than or equal to 30000, print "don't buy phone" */


let salary = 130000;
 if ( salary > 100000) { 
    console.log('buy an iphone');}
     else if ( salary <= 50000, salary > 30000 ) {
     console.log('buy mi phone');}
     else if ( salary <= 30000) 
{ 
     console.log('dont buy phone');}


// loop to print squares of first 5 natural numbers

for(let a= 1; a<=5; a++){
  console.log(a*a)
}


// loop practice 
 let a = 1
console.log( 1 + a++);
let b = 2
console.log(1 +  ++b); 

for(let a=1; a <= 10; a++) {
    console.log(a)}

 for(let a=1; a <= 10 ; a++){
 if(a%2 ===0)
console.log(a)
}

for(let a = 3 ; a <= 10 ; a++ ) {
    if(a%2 != 0)
    console.log(a)
}

for(let a=11 ; a >= 1 ; a-- ){
    if(a%2 != 0)
    console.log(a)
}

for(let a=1 ; a <= 15 ; a++){
    console.log(a)
}

for(let a = 1; a <= 8; a++){
    console.log(a+a)
}

// Check whether a number is even or odd
let number = 50
const remainder = number % 2
if (remainder === 0) {
    console.log('even');
} 

 else { console.log('odd');}

 
 // Sport preference using if else if
 let sport = football;

if (football === famous) { 
    console.log(sport);}
 if (sport === 'kabaddi') {
     console.log('SAARC');}
 if (sport === 'cricket') {
    console.log('india') ;}
if  (sport === 'basketball')  
{
    console.log('USA');}