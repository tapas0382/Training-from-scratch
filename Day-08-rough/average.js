let arr = [10, 20, 30, 40,50]
let avg = 0;
let sum = 0;
let total = 0;
let largeThan25 = 0;
let evenSum = 0;

for (let i = 0; i < arr.length; i++) {
sum += arr[i];
total++;
if (arr[i] > 25) largeThan25++;
if (arr[i] % 2 === 0) evenSum += arr[i];
}
avg = sum/total;

console.log(`Average: ${avg}`);
console.log(`greater than 25: ${largeThan25}`);
console.log(`sum of only even numbers: ${evenSum }`);