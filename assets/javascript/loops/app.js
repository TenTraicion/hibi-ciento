for (let i = 0; i <= 10; i++) {
    console.log(i);
}

const users = ["Max", "Anna", "Joel"];

for (const user of users) {
    console.log(user);
}

const signIn = {
    name: "TenTraicion",
    age: 23,
    isAdmin: true
};

for (const key in signIn) {
    console.log(key + ": " + signIn[key]);
    console.log(signIn[key]);
}

let finish = false;

while (!finish) {
    finish = confirm("Do you want to quit?");
}

console.log("Done!");
