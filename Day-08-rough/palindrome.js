function reverse(str) {
    let reversed = "";

    for( let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
};

function isPalindrome(str) {
    // if (str === reverse(str)) return true;
    // else return false;

    return str === reverse(str);           // sort
};

console.log("for madam: ", isPalindrome("madam"));
console.log("for Infosys: ", isPalindrome("Infosys"));
