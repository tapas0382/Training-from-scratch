function firstUnique(arr) {
    let map = {};

    for (let num of arr) {
        map[num] = (map[num] || 0) + 1;
    };

    for (let num of arr) {
        if (map[num] === 1) {
            return num;
        };
    };
    return -1;
};
console.log(firstUnique([4, 5, 1, 2, 0, 4]));      // 5
console.log(firstUnique([7, 7, 8, 8]));            // -1
console.log(firstUnique([10, 20, 10, 30, 20]));    // 30
console.log(firstUnique([1]));                     // 1