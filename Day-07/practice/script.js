// Change Heading
const changeHeading = document.getElementById("change-heading");
const changeBtn = document.getElementById("change-btn");

changeBtn.addEventListener("click", () => {
    changeHeading.textContent = "Heading Changed Successfully!";
});

// Dark Mode
const darkModeBtn = document.getElementById("dark-mode-btn");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.textContent = "Disable Dark Mode";
    } else {
        darkModeBtn.textContent = "Enable Dark Mode";
    }
});

// Counter App
let count = 0;
const countDisplay = document.getElementById("count");
const decreaseBtn = document.getElementById("decrease-btn");
const resetBtn = document.getElementById("reset-btn");
const increaseBtn = document.getElementById("increase-btn");

decreaseBtn.addEventListener("click", () => { count--; countDisplay.textContent = count; });
increaseBtn.addEventListener("click", () => { count++; countDisplay.textContent = count; });
resetBtn.addEventListener("click", () => { count = 0; countDisplay.textContent = count; });

// Character Counter
const charInput = document.getElementById("char-input");
const charCount = document.getElementById("char-count");

charInput.addEventListener("input", () => {
    charCount.textContent = charInput.value.length;
});

// Dynamic To-Do List
const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("add-todo-btn");
const todoList = document.getElementById("todo-list");

addTodoBtn.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;         // Prevent empty tasks
    
    // create li
    const li = document.createElement("li");
    
    //add task text in a span
    const span = document.createElement("span");
    span.textContent = taskText;
    li.appendChild(span);

    // create action buttons div
    const actionDiv = document.createElement("div");
    actionDiv.classList.add("action-btns");

    // create complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.classList.add("complete-btn");
    completeBtn.addEventListener("click", () => {
        span.classList.toggle("completed");
    });

    //create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
        li.remove(); // Deletes the entire <li> element from the DOM
    });

    // Append buttons to div, div to li, and li to the ul list
    actionDiv.appendChild(completeBtn);
    actionDiv.appendChild(deleteBtn);
    li.appendChild(actionDiv);
    todoList.appendChild(li);

    // Clear the input field
    todoInput.value = "";
});