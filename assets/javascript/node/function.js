function greetUser(greetingPrefix = "Hello", userName = "You Peice of Trash") {
  console.log(greetingPrefix + " " + userName +"!");
}

greetUser("Hi","User");
greetUser();

function sumUp(numbers) {
  let result = 0;

  for(const number of numbers) {
    result += number;
  }

  return result;
}

console.log(sumUp([1,2,20,12,15,50]));