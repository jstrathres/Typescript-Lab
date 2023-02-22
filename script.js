"use strict";
exports.__esModule = true;
var mountains = [
    {
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    },
];
function findNameOfTallestMountai(object) {
    var tallestMountain = object.reduce(function (prev, current) { return (prev.height > current.height) ? prev : current; });
    return tallestMountain.name;
}
var mountainName = findNameOfTallestMountai(mountains);
console.log(mountainName);
var products = [
    {
        name: "Hammer",
        price: 10
    },
    {
        name: "Drill",
        price: 99
    },
    {
        name: "Screwdriver",
        price: 5
    },
];
function calcAverageProductPrice(objects) {
    var totalPrice = 0;
    var numberOfProduct = objects.length;
    for (var i = 0; i < numberOfProduct; i++) {
        totalPrice += objects[i].price;
    }
    var averagePrice = totalPrice / numberOfProduct;
    return averagePrice;
}
var averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);
var inventory = [
    {
        quantity: 10,
        product: {
            name: "motor",
            price: 10.00
        }
    },
    {
        quantity: 4,
        product: {
            name: "sensor",
            price: 12.50
        }
    },
    {
        quantity: 20,
        product: {
            name: "LED",
            price: 1.00
        }
    },
];
function calcInventoryValue(x) {
    var totalValue = 0;
    x.forEach(function (item) {
        totalValue += item.product.price * item.quantity;
    });
    return totalValue;
}
var total = calcInventoryValue(inventory);
console.log(total);
