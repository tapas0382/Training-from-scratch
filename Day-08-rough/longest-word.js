function findLongestWord (sentence) {
    const words = sentence.split(" ");
    let longest = "";

    for (let word of words) {
        if (word.length > longest.length) longest = word;
    };
    return longest;
};

console.log("longest word in I am Groot is: ", findLongestWord("I am Groot"));