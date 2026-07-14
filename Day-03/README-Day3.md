# Day 3 - JavaScript Learning Journal

## 📌 Overview
On Day 3, I explored JavaScript arrays in greater depth by learning common array methods, different looping techniques, higher-order array methods, and applying everything together in a small product management mini-project. The goal was to become comfortable processing collections of data efficiently while understanding when to use different iteration techniques.

---

## ✅ What I Learned

### 1. Working with Array Methods
I practiced many of JavaScript's built-in array methods for adding, removing, searching, modifying, and rearranging elements.

I learned how to:

- Add elements using `push()` and `unshift()`.
- Remove elements using `pop()` and `shift()`.
- Find the number of elements with `length`.
- Access items by their index.
- Check whether an element exists using `includes()`.
- Find an element's position using `indexOf()`.
- Create a copy of part of an array using `slice()`.
- Modify an existing array using `splice()`.
- Sort arrays alphabetically using `sort()`.
- Reverse the order of an array using `reverse()`.

One important lesson was understanding the difference between methods that return a new array (`slice()`) and methods that directly modify the original array (`splice()`, `sort()`, and `reverse()`).

---

### 2. Understanding Different Types of Loops
I practiced several looping techniques and learned when each one is most useful.

I used:

- **for loop** for complete control over iteration using an index.
- **while loop** when the stopping condition is checked before each iteration.
- **do...while loop** which always executes at least once before checking the condition.
- **for...of loop** to iterate directly over array values in a clean and readable way.
- **for...in loop** to iterate over array indexes (although it is primarily intended for objects).

This helped me understand the strengths and appropriate use cases of each looping method.

---

### 3. Higher-Order Array Methods
I explored JavaScript's powerful functional programming methods for processing arrays.

I practiced:

- **map()** to transform every element into a new value.
- **filter()** to create a new array containing only elements that satisfy a condition.
- **find()** to retrieve the first element matching a condition.
- **some()** to check if at least one element satisfies a condition.
- **every()** to verify whether all elements satisfy a condition.
- **reduce()** to combine all elements into a single value, such as calculating a total.

These methods allowed me to perform complex operations with concise and readable code without writing manual loops.

---

### 4. Mini Product Management Project
I combined everything I had learned into a simple product management project.

Using an array of product objects, I learned how to:

- Display all product names using `forEach()`.
- Filter products based on price.
- Display only selected product names.
- Calculate the total value of all products using `reduce()`.
- Find a specific product using `find()`.
- Extract only product names using `map()`.

This project demonstrated how multiple array methods can be chained together to solve practical problems while keeping the code clean and efficient.

---

## 🧠 Key Concepts Practiced

- Array creation and manipulation
- `push()`
- `pop()`
- `shift()`
- `unshift()`
- `length`
- Array indexing
- `includes()`
- `indexOf()`
- `slice()`
- `splice()`
- `sort()`
- `reverse()`
- `for` loop
- `while` loop
- `do...while` loop
- `for...of`
- `for...in`
- `forEach()`
- `map()`
- `filter()`
- `find()`
- `some()`
- `every()`
- `reduce()`
- Method chaining
- Working with arrays of objects

---

## 💡 Takeaways

Day 3 helped me understand that JavaScript provides many built-in tools for working with arrays efficiently. Instead of relying on traditional loops for every task, I learned how higher-order array methods like `map()`, `filter()`, `find()`, and `reduce()` make code shorter, more expressive, and easier to maintain.

The mini project also showed me how these methods can work together to solve real-world problems, such as filtering products, calculating totals, and extracting specific information. Overall, today's practice strengthened my understanding of arrays and introduced me to the functional programming style that is commonly used in modern JavaScript development.