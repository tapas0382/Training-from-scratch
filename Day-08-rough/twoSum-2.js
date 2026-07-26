function twoSum(arr, target) {
    let map = {};

    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];

        if (map[complement] !== undefined) {
            return [map[complement], i];
        };
        map[arr[i]] = i;
    };
    return [];
};
console.log(twoSum([2, 7, 11, 15], 9));     // [0,1]
console.log(twoSum([3, 2, 4], 6));          // [1,2]
console.log(twoSum([3, 3], 6));             // [0,1]
console.log(twoSum([1, 2, 3], 10));         // []