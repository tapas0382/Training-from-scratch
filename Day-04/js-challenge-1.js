// JAvascript Objects

// 1. Creating an object
const person = {
    name: "Kakarot",
    age: 22,
    job: "Developer"
};
console.log("Original Object: ", person);

// 2. Accessing Properties
console.log("Access via Dot Notation: ", person.name);
console.log("Access via Bracket Notation: ", person["age"]);

// 3. Updating Values
person.age = 23;
console.log("Updated Age: ", person);

// 4. Adding New Properties
person.country = "Japan";
console.log("Added Country: ", person);

// 5. Deleting Properties
delete person.job;
console.log("Deleted Job: ", person);