// const coding = ["js", "ruby", "java", "python"]
// const values = coding.forEach ( (item) => {
//     console.log(item);
//     return item
// } )

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (num)  => {
//     return num > 4
// } )

// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//    newNums.push(num)        
//     }
// } )

// console.log(newNums);


const books = [
    {title: 'Book One', genre: "fiction", publish: 1981, 
  edition:2004  },
    {title: 'Book two', genre: "fiction", publish: 1992, 
  edition:2004  },
    {title: 'Book Three', genre: "fiction", publish: 1999, 
  edition:2004  },
];

let userBooks = books.filter( (bk) => bk.genre =="fiction" ) 
 userBooks = books.filter( (bk) => {return bk.publish ==="fiction"} ) 
console.log(userBooks);