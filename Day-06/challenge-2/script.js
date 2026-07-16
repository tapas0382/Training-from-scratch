// create a promise that resolves after 3 seconds
const waitThreeSeconds = new Promise((resolve) => {
    setTimeout(() => {
        resolve("3 seconds have passed!");
    }, 3000);
});

// create an async function that waits for the promise
async function testWait() {
    console.log("Waiting...");
    const message = await waitThreeSeconds;
    console.log(message);
}
testWait();

// Fetch users, handle errors, and display in a <ul>
const fetchBtn = document.getElementById('fetch-users-btn');
const userList = document.getElementById('user-list');

fetchBtn.addEventListener('click', async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();

        // clear list before adding new ones
        userList.innerHTML = "";

        users.forEach(user => {
            // print to console
            console.log(`Name: ${user.name} | Email: ${user.email}`);

            // display in html <ul>
            const li = document.createElement('li');
            li.textContent = `${user.name} - ${user.email} (${user.address.city})`;
            userList.appendChild(li);
        });
    } catch (error) {
        console.error("Failed to fetch users: ", error);
        userList.innerHTML = "<li>Error loading users. Please try again.</li>";
    }
})