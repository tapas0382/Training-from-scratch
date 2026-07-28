function maxConsecutiveOnes (arr) {
    let count = 0;
    let maxConsecutive = 0;

    for (let num of arr) {
        if (num === 1) {
            count++;
            if (maxConsecutive < count) {
                maxConsecutive = count;
            }
        }        
        else {
            count = 0;
        };
    };
    return maxConsecutive;
};
console.log(maxConsecutiveOnes([1,1,0,1,1,1]));      // 3
console.log(maxConsecutiveOnes([1,0,1,1,0,1]));      // 2
console.log(maxConsecutiveOnes([0,0,0]));            // 0
console.log(maxConsecutiveOnes([1,1,1,1]));          // 4
console.log(maxConsecutiveOnes([]));                 // 0