const hobbies = ["Sports, Cooking"];

hobbies.push("Readng");

console.log(hobbies);

const person = {age: 32};

function getAdultYears(p) {
  p.age -= 18;
  return p.age;
}

console.log(getAdultYears({...person}));
console.log(person);
