const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num) => num+10  )
// console.log(newNums);

const newNums = myNumbers.map( (num) => num*10 )
.map( (num) => num+1 )
.filter( (num) => num >= 40 )

// console.log(newNums);


// reduse

const myNums = [1,2,3,4]

// const mytotal= myNums.reduce( function (acc, currval) {
//     console.log(`acc; ${acc} and currval; ${currval}`);
//     return acc + currval
// } , 0 )

const mytotal = myNums.reduce( (acc, curr) => acc+curr,0 )
console.log(mytotal);


const shoppingcart = [
    {
        itemName : 'js course',
        price : 2999
    },
    {
        itemName : 'mobile course',
        price : 3000
    },
    {
        itemName : 'data engineer',
        price : 1200
    },
]

const priceToPay= shoppingcart.reduce( (acc, item) => acc + item.price, 0 )
console.log(priceToPay);