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
    adultYears = age - 18
    born = year - age
};

calculate();

alert(adultYears + "y/o and born in: " + born);