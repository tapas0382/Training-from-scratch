# JavaScript Objects — Basics

A simple script demonstrating the fundamentals of working with objects in JavaScript: creation, access, mutation, methods, and iteration.

## 📌 What's Covered

### 1. Creating Objects
How to define an object using object-literal syntax (`{ key: value }`).

### 2. Accessing Properties
Two ways to read a property:
- **Dot notation** — `person.name`
- **Bracket notation** — `person["age"]`

### 3. Updating Values
Reassigning an existing property, e.g. `person.age = 23;`

### 4. Adding New Properties
Objects are dynamic — new keys can be added at any time:
```js
person.country = "India";
```

### 5. Deleting Properties
Removing a key entirely with the `delete` keyword:
```js
delete person.job;
```

### 6. Object Methods
Functions stored as object properties, and how `this` refers to the object the method is called on:
```js
const user = {
  name: "Goku",
  greet() {
    console.log("Hello " + this.name);
  }
};
user.greet(); // Hello Goku
```

### 7. Looping Through Objects
Using `for...in` to iterate over all keys in an object:
```js
for (let key in student) {
  console.log(key, student[key]);
}
```

## 🚀 Running the Script

```bash
node index.js
```

(Replace `index.js` with your actual filename.)

## 🛠 Requirements
- [Node.js](https://nodejs.org/) installed to run via terminal, **or**
- Any modern browser console to paste and run the code directly

## 📚 Concepts Practiced
- Object literals
- Dot vs. bracket notation
- Mutating and deleting properties
- Methods and the `this` keyword
- `for...in` iteration

---
Feel free to fork and extend this with more object methods like `Object.keys()`, `Object.values()`, and `Object.entries()`.