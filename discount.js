// Есть массив:
// [
//     { name: 'rouse', price: 300 },
//     { name: 'sunflower', price: 1000 },
//     {name: '101 rouse', price: 3000 }
// ]
// Пересчитать цену с учетом скидок и преобразовать данные в новый
// массив, добавив новое поле withDiscount, которое будет хранить цену
// минус скидку:

// - Цена больше 200 -> 5% скидка
// - Цена больше 900 -> 15% скидка
// - Цена больше 2500 -> 20% скидка

// Итоговый массив должен выглядеть следующим образом:

// [
//     { name: 'rouse', price: 300, withDiscount: 285 },
//     ... и т.д
// ]

let bouquets = [
    { name: 'rouse', price: 100 },
    { name: 'sunflower', price: 1000 },
    { name: '101 rouse', price: 3000 }

]
module.exports.makeDiscount = function (array) {
    let withDiscount = array
    for (let i = 0; i < array.length; i++) {
        if (array[i].price > 2500) {
           withDiscount[i].discount = '20%' 
           withDiscount[i].withDiscount = array[i].price *80/100
        } else if (array[i].price > 900) {
           withDiscount[i].discount = '15%'
           withDiscount[i].withDiscount = array[i].price *85/100
        } else if (array[i].price > 200) {
           withDiscount[i].discount = '5%'
           withDiscount[i].withDiscount = array[i].price *95/100
        } else {
           withDiscount[i].discount = '0%'
           withDiscount[i].withDiscount = 'no discount'
        }
    }
    return withDiscount
}


