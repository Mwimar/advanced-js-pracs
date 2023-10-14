function greeting(greetingPrefix, userName = "user") {
  console.log(greetingPrefix + " " + userName + "!");
}
greeting("Hi", "Mwima");
greeting("Hello");

//the three dots wraps number in an array;
function sumUp(...numbers) {
  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return result;
}

const inputNumbers = [1, 2, 5, 3, 3, 2, 8];

console.log(sumUp(...inputNumbers));
