//  sync vs async
console.log("Sync vs Async");
console.log("Start");
setTimeout(() => {
    console.log("Hello (This waited 2 seconds)");
}, 2000);
console.log("End");

// callback & callback hell
function greet(name, callback) {
    console.log("Hello", name);
    callback();
};
function bye() {
    console.log("Goodbye\n");
};
greet("Tapas", bye);

// promises
let myPromise = new Promise((resolve, reject) => {
    let success = true;
    if(success){
        resolve("Task Completed Successfully");
    } else {
        reject("Task Failed");
    }
});

myPromise
    .then(result => console.log("Promise: ", result))
    .catch(error => console.log("Promise Error: ", error));

// async / await
function getSimulatedData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{ resolve("Data Received via Await"); }, 2000);
    });
};

async function main(){
    const data = await getSimulatedData();
    console.log(data);
};
main();

// fetch api and error handling
async function loadUser(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        console.log("Fetched First User: ", data[0].name);
    } catch(error) {
        console.log("Fetch Error: ", error);
    }
}
loadUser();