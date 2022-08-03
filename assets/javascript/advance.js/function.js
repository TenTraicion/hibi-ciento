function greetUser(greetingPrefix = "Hello", userName = "You Peice of Trash") {
  console.log(greetingPrefix + " " + userName +"!");
}

greetUser("Hi","user");
greetUser();

let result = 0;

function sumUp(numbers) {

  for(const number of numbers) {
    result += number;
  }

  return result;
}

console.log(sumUp([1,2,20,12,15,50]));

function sum(...numbers) {

  for(const number of numbers) {
    result += number;
  }

  return result;
}

console.log(sum(1,2,20,12,15,50));

function sumIn(...numbers) {

  for(const number of numbers) {
    result += number;
  }

  return result;
}

const inputNumbers = [1,2,20,12,15,50];

console.log(sumIn(...inputNumbers));

console.log(sumIn);
console.dir(sumIn);
