// objects very important
// singleton 


// object literals


const mySym = Symbol("key1")

const JsUser = {
    name: "Girish",
    "full name": "Girish Joshi",
    [mySym]: "mykey1",
    age: 18,
    location: "Haldwani",
    email: "girish@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// // console.log(JsUser."full name");// not possible
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email="Girish@chat.com"
// Object.freeze(JsUser)

JsUser.greeting= function(){
    console.log("hello js user");
}
JsUser.greetingTwo= function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());