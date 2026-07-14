// Introduction to DOM

const heading = document.getElementById("title");       // Select HTML Element (Assuming <h1 id="title">Hello</h1> exists in HTML)
console.log("Selected Heading: ", heading);

heading.textContent = "Welcome";        // Change Text of heading

heading.style.color = "red";            // Change color of the heading

heading.style.background = "yellow";    // Change background color of heading

heading.innerHTML = "<i>New Heading</i>"        // Change HTML (Injecting HTML tags directly)

const btn = document.getElementById("btn");
btn.addEventListener("Click", () => {           // Button Click (Assuming <button id="btn">Click Me</button> exists in HTML)
    alert("Button Clicked!");
});