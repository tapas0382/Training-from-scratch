function moveZeroes (arr) {
    let nonZeroes = [];
    let zeroes = [];
    let result = [];
     
    for (let num of arr) {
        if (num !== 0) nonZeroes.push(num);
        else zeroes.push(num);
    };
    return nonZeroes.concat(zeroes);
};
console.log(moveZeroes([0, 1, 0, 3, 12]));