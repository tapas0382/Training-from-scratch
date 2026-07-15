// function

function greet() {
    console.log("Hello");
};
greet();

// parameters

function greetUser(name) {
    console.log("Hello "+ name);
};
greetUser("Tapas");

function addNumbers(a, b) {
    console.log(`${a} + ${b} = ${a + b}`);
};
addNumbers(5, 7);

// return keyword

function multiply(a,b) {
    return a * b;
}
let product = multiply(5, 7);
console.log("Product: ", product);

// Scope (Global vs Local)

let globalName = "Tapas";

function showScope() {
    let localAge = 22;
    console.log("INside Function: ", globalName, localAge);
};
showScope();

// expressions & Arrow Functions

const sayHi = function() {
    console.log("Hi");
};
sayHi();

const addArrow = (a, b) => {
    return a + b;
};
console.log(addArrow(5, 7));

const subtractArrow = (a, b) => a - b;
console.log(subtractArrow(7, 5));

// callback functions

function greetCallback(name) {
    console.log("Hello ", name);
};

function processUser(callback) {
    callback("Tapas");              // this is the callback function and takes the value inside () as the argument
};
processUser(greetCallback);

// default parameter

function greetDefault(name = "Guest") {
    console.log("Welcome ", name);
}
greetDefault();

function sumAll(...numbers) {       // ... : gathers any numbers of arguments into an array
    let total = 0;
    for (let num of numbers) {
        total += num; 
    };
    return total;
};
console.log("Rest Sum: ", sumAll(1, 2, 5, 8));