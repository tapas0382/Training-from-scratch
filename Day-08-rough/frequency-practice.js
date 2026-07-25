const arr = [1, 2, 2, 3, 1, 4, 2];
let frequency = {};

for (let num of arr) {
    if (frequency[num]) frequency[num]++;
    else frequency[num] = 1;
    // frequency[num] = (frequency[num] || 0) + 1;              // sort trick
};

console.log("frequency of the array: ", frequency);
