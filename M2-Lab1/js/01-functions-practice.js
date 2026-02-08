function halfNumber(num) {
  const result = num / 2;
  console.log(`Half of ${num} is ${result}.`);
  return result;
}

function squareNumber(num) {
  const result = num * num;
  console.log(`The result of squaring the number ${num} is ${result}.`);
  return result;
}

function percentOf(num1, num2) {
  const result = (num1 / num2) * 100;
  console.log(`${num1} is ${result}% of ${num2}.`);
  return result;
}

function findModulus(num1, num2) {
  const result = num1 % num2;
  console.log(`${result} is the modulus of ${num1} and ${num2}.`);
  return result;
}

/* Make function global for button */
window.runFunctions = function () {
  halfNumber(5);
  squareNumber(3);
  percentOf(2, 4);
  findModulus(4, 10);
};
