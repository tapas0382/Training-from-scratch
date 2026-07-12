const numbers = [12, 46, 7, 89, 23, 45, 12, 67, 1, 89];

const max = Math.max(...numbers);
const min = Math.min(...numbers);

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
const average = sum / numbers.length;

const uniqueNumbers = [...new Set(numbers)];

const asc = [...uniqueNumbers].sort((a,b) => a - b);
const desc = [...uniqueNumbers].sort((a, b) => b - a);

const frequency = numbers.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
}, {});

// another method
const loopFrequency = {};
for (const num of numbers) {
    loopFrequency[num] = (loopFrequency[num] || 0) + 1;
}

console.log("Max: ", max);
console.log("Min: ", min);
console.log("Sum: ", sum);
console.log("Average: ", average);
console.log("Unique: ", uniqueNumbers);
console.log("Ascending order: ", asc);
console.log("Descending Order: ", desc);
console.log("frequency: ", frequency);
console.log("frequency: ", loopFrequency);