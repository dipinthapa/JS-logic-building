//Write a program that takes two objects as input and merges their properties into a single object.
//{name: sudarshan, address: gairidhara} {phone: 1234567890} 
//-> {name: sudarshan, address: gairidhara} phone: 1234567890}

const obj1 = {name: 'Dipin', address: 'kritipur'};
const obj2 = { phone: 1234567890 };
 
const merged = {...obj1, ...obj2};
console.log(merged)