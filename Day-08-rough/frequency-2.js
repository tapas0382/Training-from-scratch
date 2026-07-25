const str = "programming";
let frequency = {};

for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1;

    // if (frequency[char]) frequency[char]++;
    // else frequency[char] = 1;
};
console.log(`frequency of each characters in the string is ${JSON.stringify(frequency)}`);

let maxCount = 0;

// Find the maximum frequency
for (let char in frequency) {
    if (frequency[char] > maxCount) {
        maxCount = frequency[char];
    }
};

// Print all characters with that frequency
for (let char in frequency) {
    if (frequency[char] === maxCount) {
        console.log(`${char} -> ${maxCount}`);
    }
};