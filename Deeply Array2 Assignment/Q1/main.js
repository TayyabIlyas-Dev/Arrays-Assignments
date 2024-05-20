// 1. Define a type alias named Product to represent a product with the following
// properties:
// • name (string): The name of the product.
// • price (number): The price of the product.
// • inventory (object): An object containing inventory details including:
// • stock (number): The number of products available.
// • colorOptions (string[ ]): An array listing available colors.
// 2. Create an array named products containing at least three product objects. Each
// product object should include a name, price, and inventory details.
var products = [
    {
        name: 'Laptops',
        price: 10000,
        inventory: {
            stock: 100,
            colorOption: ['silver', 'black', 'Mate-Grey']
        },
    },
    {
        name: 'GamingChair',
        price: 5000,
        inventory: {
            stock: 10,
            colorOption: ['red', 'black', 'blue']
        },
    },
    {
        name: 'GraphicCard',
        price: 20000,
        inventory: {
            stock: 5,
            colorOption: ['silver', 'black', 'Grey']
        },
    }
];
// Implement a function named changeColor that takes a product object and a new
// color as input. This function should update the color property of the product and
// adjust the price based on the new color (implement your own logic, e.g., increase by
// 10% for red, decrease by 5% for blue).
function calculatePercentage(number, percentage) {
    return (number * percentage) / 100;
}
function changeColor(product, newColor) {
    if (product.inventory.colorOption.includes(newColor)) {
        if (newColor === 'red') {
            product.price = product.price + calculatePercentage(product.price, 10);
        }
        else if (newColor === 'blue') {
            product.price = product.price - calculatePercentage(product.price, 5);
        }
        else if (newColor === 'black') {
            product.price = product.price - calculatePercentage(product.price, 10);
        }
        console.log('you selected this! in ' + newColor + ' color');
        return (product);
    }
    else {
        console.log("Color ".concat(newColor, " is not avalable in this product."));
    }
}
//  Display each product's name, price, stock, and available colors. Iterate through the
// products array and print each product's details.
products.forEach(function (product) {
    console.log("Name: ".concat(product.name));
    console.log("Price: ".concat(product.price));
    console.log("Stock: ".concat(product.inventory.stock));
    console.log("Available Colors: ".concat(product.inventory.colorOption.join(', ')));
    console.log('---');
});
console.log(changeColor(products[1], 'black'));
// completed
