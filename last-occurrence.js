function lastOccurrence (arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let answer = -1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            answer = mid;
            left = mid + 1;
        }
        else if (target < arr[mid]) right = mid - 1;
        else if (target > arr[mid]) left = mid + 1;
    };
    return answer;
};
console.log(lastOccurrence([1,2,2,2,3,4], 3));