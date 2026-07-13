// Loops

let nums = [10, 20, 30];

console.log("Standard for loop");
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

console.log("while loop");
let j = 0;

while(j < nums.length) {
    console.log(nums[j]);
    j++;
}

console.log("do while loop");
let k = 0;

do {
    console.log(nums[k]);
    k++;
} while (k < nums.length);

// 4. For...of Loop (The absolute best/cleanest way to loop through Arrays)
console.log("for of")
for (let num of nums) {
    console.log(num);
}

// 5. For...in Loop (Used primarily for Objects, but when used on an array, it grabs the INDEX, not the value)
console.log("for in");
for (let index in nums) {
    console.log(`Index: ${index}, Value: ${nums[index]}`);
}