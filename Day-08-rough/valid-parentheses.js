function validParentheses (str) {
    let stack = [];

    for (let char of str) {
        if (char === "(" || char === "{" || char === "["){
            stack.push(char);
        }
        else if (stack[stack.length - 1] === "(" && char === ")") {
            stack.pop();
        }
        else if (stack[stack.length - 1] === "{" && char === "}") {
            stack.pop();
        }
        else if (stack[stack.length - 1] === "[" && char === "]") {
            stack.pop();
        }
        else return false;
    };
    return stack.length === 0;
};
console.log(validParentheses("()"))         // true
console.log(validParentheses("()[]{}"))     // true
console.log(validParentheses("(]"))         // false
console.log(validParentheses("([)]"))       // false
console.log(validParentheses("{[]}"))       // true