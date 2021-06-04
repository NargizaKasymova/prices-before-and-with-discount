
let bouquets2 = [
    { name: 'rouse', price: 300 },
    { name: 'sunflower', price: 1000 },
    { name: '101 rouse', price: 3000 }
]

let { makeDiscount } = require ('./discount')
console.log(makeDiscount(bouquets2))