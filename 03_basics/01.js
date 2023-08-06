// scope
// const isUserLoggedIn = true
// const temperature = 51

// if (temperature < 50) {
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// const score = 200

// if (score>100) {
//     const power= "fly"
//     console.log(`user power : ${power}`);


//const balance = 1000

//if(balance > 500) console.log("text"),console.log("text2");

// if (balance < 500) {
//     console.log("less than");
// } else if (balance <750) {
//     console.log("less than 750");
// } else if(balance < 900) {
//     console.log("less than 900");
// }else {
//     console.log("less than 1200");
// }

// const isUserLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true
// if (isUserLoggedIn && debitCard ) {
//     console.log("Allow to buy course");
// } 
// if (loggedInFromGoogle || loggedInFromEmail){
//     console.log("user logged in");
// }




// swith

//  const month = 1

//  switch (month) {
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("february");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
 
//     default:
//         console.log("default case match");
//         break;
//  }

// true / false 

const userEmail = "girish.ai"

// if (userEmail) {
//     console.log("got user email");
// } else {
//     console.log("dont have user email");
// }

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// Nullish Coalescing Operator (??): null undefind

let val1;
// val1= 5 ?? 10
// val1 = null ?? 10

 
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);

// Terniary operator

// condition ? true  :  false

const iceTeaPrice = 60
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("more than 80");
