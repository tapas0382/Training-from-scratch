const user = {
    name: "Goku",
    greet() {
        console.log("Hello " + this.name);      // 'this' refers to the object itself
    }
};
user.greet();

const student = {
    name: "Tapas",
    age: 22,
    city: "Joda"
};
console.log("Looping Object");
for (let key in student) {
    console.log(key, student[key]);
}