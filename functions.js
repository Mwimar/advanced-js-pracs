function greeting(greetingPrefix, userName = "user") {
  console.log(greetingPrefix + " " + userName + "!");
}
greeting("Hi", "Mwima");
greeting("Hello");

function sumUp(numbers) {
  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return result;
}

console.log(sumUp([1, 2]));
