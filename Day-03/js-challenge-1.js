// Arrays

let fruits = ["Apple", "Banana", "Mango"];

fruits.push("Orange");                       // add to the end
fruits.pop();                                // remove from the end
fruits.shift();                              // removes from the start
fruits.unshift("Grapes");                    // adds to the start

console.log("Length: ", fruits.length);      // total items
console.log("Index 1: ", fruits[1]);         // first index of the array

console.log("Has Mango? ", fruits.includes("Mango"));           // includes(): Checks if an item exists (returns true/false)
console.log("Index of Banana: ", fruits.indexOf("Banana"));     // indexOf(): Finds the position of an item (returns -1 if not found)

console.log("Slice (0 to 2): ", fruits.slice(0, 2));    // slice(): Returns a COPY of a section of the array (start index, end index not included) 

// Here, we go to index 1, delete 1 item ("Banana"), and insert "Kiwi"
fruits.splice(1, 1, "Kiwi");                // splice(): MODIFIES the original array (start index, delete count, item to insert)
console.log("After Splice:", fruits);       

console.log("Sorted: ", fruits.sort());     // sort(): Sorts alphabetically (Note: requires a custom function to sort numbers accurately)

console.log("Reversed: ", fruits.reverse());        // reverse(): Reverses the current order of the array