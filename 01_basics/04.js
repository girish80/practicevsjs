// // string
// const name = "Girish"
// const repoCount = 50
// // console.log(name + repoCount+ "value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// const gameName = new String('girish-jo')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('r'));

// const newString= gameName.substring(0,4)
// console.log(newString);

// const anotherString = gameName.slice(-8,2)
// console.log(anotherString);

// const NewString = "  girish    "
// console.log(NewString);
// console.log(NewString.trim());

// const url = "https://gir%20ish.com"
// console.log( url.replace('%20', '-'));

// console.log(url.includes('gir'));

// console.log(gameName.split('-'));

// numbs
// const score= 400
// console.log(score);
// const balance = new Number(100)

// console.log(balance);

// console.log(balance.toFixed(1));

// const otherNumber=1123.9754
// console.log(otherNumber.toPrecision(5));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// maths

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));

console.log(Math.random());
console.log(Math.random()*10)+1;

const min =10
const max = 20

console.log(Math.floor(Math.random()* (max-min +1))+min)