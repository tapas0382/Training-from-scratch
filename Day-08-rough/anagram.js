function isAnagram (str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    };

    let frequency = {};
    for (let char of str1) {
        frequency[char] = (frequency[char] || 0) + 1;
    };

    for (let char of str2) {
        if (!frequency[char]) {
            return false;
        }
        frequency[char]--;
    };
    return true;    
};

console.log("for listen and silent: ", isAnagram("listen", "silent"));
console.log("for hello and world: ", isAnagram("hello", "world"));
console.log("for heart and earth: ", isAnagram("heart", "earth"));