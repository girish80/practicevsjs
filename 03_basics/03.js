// for of loop

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "hello world!"
// for (const greet of greetings) {
//     console.log(`each char is ${greet}`);
// }

// maps

const map = new Map ()
map.set('IN', "india")
map.set('USA', "united state of america")

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key,':-', value);
// }

// object

const myObject = {
    js: 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : "swift by apple"
}

// for (const key in myObject) {
//     console.log(myObject[key]);
// }

// const programing = ["js", "rb", "py", 'java', "cpp"]

// for (const key in programing) {
//    console.log(programing[key]);
// }


const coding = ["js", "ruby", "java", "python"]

// coding.forEach( function (val){
// console.log(val);
// } )
// coding.forEach ( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach( (item, index, arr) => {
//     console.log(item,index,arr);
// } )


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "java"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
} )