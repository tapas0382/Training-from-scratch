const myProfile = {
    name: "Tapas",
    age: 22,
    city: "Joda",
    hobby: "Web Development"
};

// console.log(myProfile);
for (let key in myProfile) {
    console.log(`${key}: ${myProfile[key]}`);
}

myProfile.hobby = "PC Gaming";
console.log("Updated hobby: ", myProfile.hobby);

delete myProfile.city;
console.log("city Deleted! ", myProfile);

myProfile.introduce = function() {
    // console.log("Hi I'm ", this.name);
    console.log(`Hi I'm ${this.name}`);
};
myProfile.introduce();