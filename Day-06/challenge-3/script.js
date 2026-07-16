const loadBtn = document.getElementById('load-btn');
const profilePic = document.getElementById('profile-pic');
const fullName = document.getElementById('full-name');
const email =  document.getElementById('email');
const country = document.getElementById('country');
const loading = document.getElementById('loading');

loadBtn.addEventListener("click", async () => {
    loadBtn.disabled = true;
    loading.style.display = "block";

    try {
        // fetch data
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        const user = data.results[0];

        // Update DOM
        profilePic.src = user.picture.large;
        fullName.textContent = `${user.name.first} ${user.name.last}`;
        email.textContent = user.email;
        country.textContent = user.location.country;
    } catch (error) {
        console.log("Error fetching random user: ", error);
        fullName.textContent = "Error loading data.";
    } finally {
        // Remove Loading State & Enable Button (Runs whether it succeeded or failed)
        loadBtn.disabled = false;
        loading.style.display = "none";
    }
});