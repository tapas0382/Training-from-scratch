function productExceptSelf (arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let product = 1;

        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                product *= arr[j];
            };
        };
        result.push(product);
    };
    return result;
};
console.log(productExceptSelf([1, 2, 3, 4]));   // [24,12,8,6]
console.log(productExceptSelf([2, 3, 4, 5]));   // [60,40,30,24]
console.log(productExceptSelf([5]));            // [1]