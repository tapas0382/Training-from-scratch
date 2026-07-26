function firstNonRepeatingChar(str) {
    let frequency = {};

    for (let char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
    };

    for (let char of str) {
        if (frequency[char] === 1) {
            return char;
        };
    };
    return "No non-repeating character";
};

console.log("for aabbcc, first non repeating character is: ", firstNonRepeatingChar("aabbcc"));
console.log("for programming, first non repeating character is: ", firstNonRepeatingChar("programming"));
