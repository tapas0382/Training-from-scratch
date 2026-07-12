const student = {
    name: "Tapas",
    age: 22,
    course: "MCA",
    marks: [80, 75, 90]
};

const printDetails = (studentObj) => {
    console.log(`${studentObj.name} is a ${studentObj.age}-year-old studying ${studentObj.course}.`);
}

const average = (studentObj) => {
    const sum = studentObj.marks.reduce((acc, curr) => acc + curr, 0);
    return sum / studentObj.marks.length;
}

const addMark = (studentObj, newMark) => {
    studentObj.marks.push(newMark);
    console.log(`Added ${newMark}. New marks: `, studentObj.marks);
}

const highest = (studentObj) => {
    return Math.max(...studentObj.marks);
}

printDetails(student);
console.log("Average: ", average(student));
addMark(student, 68);
console.log("Highest mark is: ", highest(student));