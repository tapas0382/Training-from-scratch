function moveZeroes (arr) {
    let insertPos = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[insertPos] = arr[i];
            insertPos++;
        };
    };

    while (insertPos < arr.length) {
        arr[insertPos] = 0;
        insertPos++;
    };
    return arr;
};
console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]