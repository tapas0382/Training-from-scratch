function secondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    };

    if (secondLargest === -Infinity) {
        return -1;
    }
    return secondLargest;
};

console.log(secondLargest([2, 4, 1, 5, 3]));      // 4
console.log(secondLargest([10, 20, 20, 5]));      // 10
console.log(secondLargest([5, 5, 5, 5]));         // -1
console.log(secondLargest([-1, -5, -3]));         // -3