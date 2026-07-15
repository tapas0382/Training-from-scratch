// Create Simple Calculator

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function calculator(choice, num1, num2) {
    console.log("Choose the option of operations");
    switch(choice) {
        case 1:
            console.log("Add Result: ", add(num1, num2));
            break;
        case 2:
            console.log("Subtract Result: ", subtract(num1, num2));
            break;
        case 3:
            console.log("Multiply Result: ", multiply(num1, num2));
            break;
        case 4:
            console.log("Divide result: ", divide(num1, num2));
            break;
    };
};
calculator(1, 5, 3);
calculator(3, 5, 3);
calculator(2, 5, 3);
calculator(4, 10, 5);