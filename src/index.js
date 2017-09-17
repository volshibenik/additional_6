module.exports = function zeros(expression) {
  expression = '';
  console.log('aa',factorial(95)*factorial(95)*factorial(95)*factorial(95));
}

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