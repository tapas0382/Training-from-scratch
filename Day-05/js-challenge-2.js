// 1. return square

function square(num) {
    return num * num;
}
console.log("Square of 2 is: ", square(2));

// 2. Return true or false if even

function isEven(num) {
    return num % 2 === 0;
};
console.log("5 is even: ", isEven(5));

// 3. Print Hello name

function greet(name) {
    console.log("Hello", name);
};
greet("Tapas");

// 4. arrow function to multiply 2 numbers

const multiply = (a, b) => a * b;
console.log("3 multiply by 4: ", multiply(3, 4));

// 5. function that returns the largest numbers

function getLargest(a, b) {
    return a > b ? a : b;
};
console.log(`Between 10 and 100, ${getLargest(10, 100)} is largest`);