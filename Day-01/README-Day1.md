# Day 1 - JavaScript Learning Journal

## 📌 Overview
On Day 1, I practiced working with arrays of numbers in JavaScript, focusing on built-in methods for calculations, transformations, and data analysis. The goal was to understand how to extract insights (max, min, sum, average, uniqueness, sorting, and frequency) from a simple array using both functional and imperative approaches.

## ✅ What I Learned

### 1. Finding Maximum and Minimum Values
I learned how to use the spread operator to unpack an array's values so they can be passed as individual arguments into functions like Math.max() and Math.min(). This is a common trick since these functions don't accept arrays directly — they expect separate number arguments.

### 2. Calculating Sum and Average
I used the reduce() method to accumulate a running total across all elements in the array, starting from an initial value of zero. Once I had the total sum, calculating the average was simply dividing the sum by the number of elements. This reinforced how reduce() is used to collapse an entire array down into a single value.

### 3. Removing Duplicates
I learned that the Set object automatically enforces uniqueness — when you pass an array into a Set, any duplicate values are dropped. Combined with the spread operator, I was able to convert that Set back into a plain array, giving me a clean list of unique numbers.

### 4. Sorting in Ascending and Descending Order
I practiced using the sort() method with comparator functions to control number ordering, since by default JavaScript sorts values as strings (which gives incorrect results for numbers). I also learned the importance of creating a copy of an array before sorting, so the original array isn't accidentally mutated — sort() modifies arrays in place.

### 5. Counting Frequency of Each Number
I explored two different approaches to count how many times each number appears in the array:
- A functional approach using reduce(), where I built up a frequency object as I iterated through the array.
- An imperative approach using a for...of loop, achieving the same result with more traditional, step-by-step logic.

Comparing both approaches helped me understand the tradeoffs between concise functional code and more explicit, readable loop-based code.

## 🧠 Key Concepts Practiced
- Spread operator for unpacking arrays into arguments and copying arrays
- Math.max() and Math.min() for finding extremes
- reduce() for summing values and building frequency objects
- Set for removing duplicate values
- sort() with comparator functions for correct numeric ordering
- Avoiding array mutation by copying before sorting
- Comparing functional style (reduce) vs imperative style (for...of loop) for solving the same problem

## 💡 Takeaways
Day 1 helped me realize that many array problems can be solved in multiple ways in JavaScript, and choosing between a functional method like reduce() versus a traditional loop often comes down to readability, intent, and personal/team coding style. I also learned to be mindful of array mutation, especially with methods like sort(), and to always create copies when I need to preserve the original data.