// Function
function sayMyName (){
    console.log("G");
    console.log("I");
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
}
// sayMyName()

// function addTwoNumbers(number1,number2){
//  console.log(number1 + number2);
// }


function addTwoNumbers(number1,number2){
//  let result = number1 + number2
//  return result
return number1+ number2
}

const result = addTwoNumbers(3,5)
// console.log("result: ", result);

function loginUserMessage(username){
    if(username ===undefined){
   console.log("please enter a user name");
   return
    }
    return `${username} just logged in` 
}

// console.log(loginUserMessage("Girish"));
// console.log(loginUserMessage());

function calclateCartPrice(val1, val2,...num1){
    return num1
}
// console.log(calclateCartPrice(200,400,500,2000));

const user ={
    username: "Girish",
    Price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.Price}`);
}

handleObject(user)

const myNewArry =[200,400,100,600]

function returnSecondValue(getArry){
    return getArry[1]
}
// console.log(returnSecondValue(myNewArry));
console.log(returnSecondValue([200,400,500,1000]));