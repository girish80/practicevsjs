// arrow
const user = {
    userName: "Girish",
    price: 999,

    welcomeMassage: function () {
        console.log(`${this.userName}, welcome to website`);
      
    }
}
// user.welcomeMassage()
// user.userName = "sam"
// user.welcomeMassage()
//console.log(this);

// function chai(){
//     console.log(this);
// }
// chai()

const chai = () => {
let userName= "Girish"
console.log(this);
}
//chai()

//const addTwo =(num1,num2) => {
//return num1 + num2
//}
//const addTwo =(num1,num2) =>  num1 + num2
//const addTwo =(num1,num2) =>  (num1 + num2)
const addTwo =(num1,num2) =>  ({username: "Girish"})
console.log(addTwo(3,4));

