// Higher Order Array Methods

// map() - Double the numbers
const nums1 = [2, 5, 7, 9, 10];
const doubled = nums1.map(n => n * 2);
console.log("Challenge 1 (Doubled): ", doubled);

// filter() - Greater than 50
const nums2 = [10, 90, 34, 65, 88, 21];
const over50 = nums2.filter(n => n > 50);
console.log("Challenge 2 (Over 50): ", over50);

// find() - Find student "Rahul"
const students = [
    { name: "Amit" },
    { name: "Rahul" },
    { name: "Tapas" }
];
const rahul = students.find(student => student.name === "Rahul");
console.log("Challenge 3 (Found): ", rahul);

// some()
// Returns a boolean (true/false). It returns true if AT LEAST ONE element passes the condition.
let someNums= [1, 3, 5, 8];
console.log("some(): ", someNums.some(n => n % 2 === 0));

// every() 
// Returns a boolean (true/false). It returns true ONLY if ALL elements pass the condition.
let everyNums = [2, 4, 6];
console.log("every(): ", everyNums.every(n => n % 2 === 0));

// reduce() - Calculate total
const prices = [100, 250, 400, 50];
const total = prices.reduce((acc, curr) => acc + curr, 0);
console.log("Challenge 4 (Total): ", total);