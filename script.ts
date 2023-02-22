export {}

//EXERCISE 1
interface Mountain 
{
    name:string;
    height:number;
}

let mountains: Mountain[] =
[
    {
        name:"Kilimanjaro",
        height: 19341,
    },
    {
        name:"Everest",
        height: 29029,
    },
    {
        name:"Denali",
        height: 20310,
    },
];

function findNameOfTallestMountai(object:Mountain[]):string 
{
    let tallestMountain:Mountain = object.reduce((prev, current) =>(prev.height > current.height)? prev: current);
    return tallestMountain.name;
}
let mountainName:string = findNameOfTallestMountai(mountains);
console.log(mountainName);



//EXERCISE 2
interface Product 
{
    name:string,
    price:number,
}

let products: Product[] =
[
    {
        name:"Hammer",
        price: 10,  
    },
    {
        name:"Drill",
        price: 99,  
    },
    {
        name:"Screwdriver",
        price: 5,  
    },
]

function calcAverageProductPrice(objects:Product[]):number 
{
    let totalPrice =0;
    let numberOfProduct: number = objects.length;

    for (let i=0; i < numberOfProduct; i++) 
    {
        totalPrice += objects[i].price;
    }
    let averagePrice:number = totalPrice/numberOfProduct;
 return averagePrice;
}
let averagePrice:number = calcAverageProductPrice(products);
console.log(averagePrice);



//EXERCISE 3
interface InventoryItem 
{
    product: Product;
    quantity: number;
}

let inventory: InventoryItem[] =
[
    {
        quantity: 10,
        product:
        {
            name:"motor",
            price: 10.00,
        }        
        
    },
    {
        quantity: 4,
        product:
        {
            name:"sensor",
            price: 12.50,
        }
    },
    {
        quantity: 20,
        product:
        {
            name:"LED",
            price: 1.00,
        }
    },
];

function calcInventoryValue(x:InventoryItem[]):number 
{
    let totalValue=0;
    x.forEach(item=>  
    {
        totalValue += item.product.price *item.quantity;
    });
    return totalValue;
}
let total=calcInventoryValue(inventory);
console.log(total);