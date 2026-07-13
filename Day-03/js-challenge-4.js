const products = [
    { id: 1, name: "Laptop", price: 7000 },
    { id: 2, name: "Mouse", price: 500 },
    { id: 3, name: "Keyboard", price: 1500 },
    { id: 4, name: "Monitor", price: 12000 }
];

console.log("Mini Project");

console.log("All Products: ");
products.forEach(p => console.log(p.name));

// classic for loop
// for (let i = 0; i < products.length; i++) {
//     console.log(products[i].name);
// }

// for of
// for (const p of products) {
//     console.log(p.name);
// }

// const filter = products.filter(p => p.price > 1000);
// console.log("Products above 1000: ", filter);
// to show only names here
console.log("Above 1000: ")
products.filter(p => p.price > 1000).forEach(p => console.log(p.name));

// const filter = products.filter(p => p.price > 1000).map(p => p.name);
// console.log("Products above 1000: ", filter)

const totalPrice = products.reduce((acc, p) => acc + p.price, 0);
console.log("Total Price: ", totalPrice);

console.log("Found monitor: ", products.find(p => p.name === "Monitor"));

const onlyNames = products.map(p => p.name);
console.log("Only Names: ", onlyNames);