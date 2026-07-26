function countVowelsAndConsonants (str) {
    const vowels = "aeiouAEIOU";
    let vowel = 0;
    let consonant = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) vowel++;
        else if (/[a-zA-Z]/.test(str[i])) consonant++;
        else return "There is a space or number or punctuation, so Invalid Input";
    };
    return `vowels: ${vowel} and consonants: ${consonant}`;
};

console.log("Vowels and consonants count for JavaScript: ", countVowelsAndConsonants("JavaScript"));
console.log("Vowels and consonants count for HELLO: ", countVowelsAndConsonants("HELLO"));
console.log("Vowels and consonants count for xyz: ", countVowelsAndConsonants("xyz"));