module.exports = function zeros(expression) {
  expression = '';
  return console.log('aa',factorial(95)*factorial(95));
}
// 10 gives 1 zero
// 5 * 2 also gives one zero

function factorial(num) {
  return num === 1 ? num : num*factorial(num-1);
}

function doubleFactorial(num) {
  if (num % 2) {
    return num === 1 ? num : num * doubleFactorial(num-2);
  } else {
    return num === 2 ? num : num * doubleFactorial(num-2)
  }
}