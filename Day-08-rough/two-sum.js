function twoSum(arr, target) {
    let map = {};

    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length - 1; j >= 0; j--) {
            if (i === j) continue;
            if (arr[i] + arr[j] === target) {
                return [i, j];
            };
        };
    };
    return [];
};
console.log(twoSum([2, 7, 11, 15], 9));     // [0,1]
console.log(twoSum([3, 2, 4], 6));          // [1,2]
console.log(twoSum([3, 3], 6));             // [0,1]
console.log(twoSum([1, 2, 3], 10));         // []