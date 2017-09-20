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
function deFact (el) {
	var arr =[];
	var num = parseInt(el);
	var numStr = num+'';
	var amo = Math.ceil(num/2);
	console.log(numStr.length);
	if (el.length - numStr.length ===2) {

		for(var i = 0; i< amo; i++) {
			arr[i] = num;
			num-=2;
		}
	}else {

	}
	console.log(arr);
}

