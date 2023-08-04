// string
const name = "Girish"
const repoCount = 50
// console.log(name + repoCount+ "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('girish-jo')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString= gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,2)
console.log(anotherString);

const NewString = "  girish    "
console.log(NewString);
console.log(NewString.trim());

const url = "https://gir%20ish.com"
console.log( url.replace('%20', '-'));

console.log(url.includes('gir'));

console.log(gameName.split('-'));