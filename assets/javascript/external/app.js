let age = 23;
let year = 2022;
let userName = "TenTraicion";
let hobbies = ["Sports", "Cooking", "Reading"];
let job = {
    title: "Developer",
    place: "New York", 
    salary: "$500k"
};

let adultYears;
let born;

function calculate() {
    adultYears = age - 18;
    born = year - age;
};

calculate();

alert("you are " + adultYears + "y/o and born in: " + born);

// Use the function dynamically
let fuck;

function fucks(userAge) {
    return userAge - 3;
};

fuck = fucks(age);

alert(age + "y/o man can fuck approx " + fuck + "y/o lady");