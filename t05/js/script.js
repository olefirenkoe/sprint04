let container = document.getElementById('container');

let salads = new Map([
    ["Greek Salad", 5.99],
    ["Caesar Salad", 7.99],
]);

let mainDishes = new Map([
    ["Margherita Pizza", 12.50],
    ["Tomato Soup", 6.99],
    ["Burger", 10.00]
]);

let desserts = new Map([
    ["Cheasecake", 4.99],
    ["Chocolate Ice-Cream", 2.50],
    ["Fruit Salad", 3.99]
]);

let drinks = new Map([
    ["Lemonade", 3.20],
    ["Green Tea", 1.50],
    ["Coffee", 1.99]
]);

let menu = new Map([
    ["Salads", salads],
    ["Main dishes", mainDishes],
    ["Desserts", desserts],
    ["Drinks", drinks]
]);

menu.forEach((key, value, map) => {
    container.innerHTML += `<h2>${value}</h2>`;
    key.forEach((value, key, map) => {
        container.innerHTML += `<p>${key}<span>$ ${value.toFixed(2)}</span></p>`
    });
});

console.log(menu);