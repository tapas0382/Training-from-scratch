// Return factorial

function getFactorial(num) {
    let result = 1;
    for (let i = num; i > 0; i--) {
        result *= i;
    };
    return result;
};
console.log("factorial of 5:", getFactorial(5));

// Return reverse of string

function reverseString(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    };
    return reverse;
};
console.log("Reverse of Hello: ", reverseString("Hello"));

// Count Vowels in string

function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        };
    };
    return count;
};
console.log(`Tapas contains ${countVowels("Tapas")} vowels`);

// Check Palindrome

function isPalindrome(str) {
    const reverse = str.split("").reverse().join("");
    if (str === reverse) {
        return true;
    } else {
        return false;
    };
};
console.log("madam is palindrome: ", isPalindrome("madam"));

// find the largest inside an array using a function

function findLargest(arr) {
    return Math.max(...arr);
};
console.log("Max in array: ", findLargest([16, 25, 1, 45, 7, 12]));