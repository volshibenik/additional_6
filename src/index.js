module.exports = function zeros(expression) {
	
	var qty5 = 0,
	    qty2 = 0;
	var arr = expression.split('*');
	
	for (var i = 0; i < arr.length; i++) {

		qty5 += fivesAmount(deFact(arr[i]));

	}
	
	for (var i = 0; i < arr.length; i++) {

		qty2 += deucesAmount(deFact(arr[i]), qty5)

	}

	return qty5 <= qty2 ? qty5 : 0;
	
}
// 10 gives 1 zero
// 5 * 2 also gives one zero
// res == num of *5 if there is enough even

function deFact (el) {
	
	var arr =[],
	 		num = parseInt(el),
	 		numStr = num+'',
	 		amo = Math.ceil(num/2);

	if (el.length - numStr.length ===2) {

		for(var i = 0; i< amo; i++) {

			arr[i] = num;
			num-=2;

		}

	}else if(el.length - numStr.length ===1){

		for(var i = 0; i< parseInt(el); i++) {

			arr[i] = num;
			num-=1;

		}

	}

	return arr

}

function fivesAmount (arr) {
	
	var newArr;
	
	return newArr = arr.reduce(function(acc, item) {

		if (item % 5 === 0) {
			if (item/5 % 5 === 0) {
				acc+=2;
			}else {acc+=1}
		}

		return acc;

	},0)
	
}

function deucesAmount (arr, criticalQty) {
	
	var newArr;
	
	return newArr = arr.reduce(function(acc, item) {
		
		if (acc >= criticalQty) {
			return acc;
		}
		if (item % 2 === 0) {
			if (item/2 % 2 === 0) {
				acc+=2;
			}else if (item/4 % 2 === 0) {
				acc+=3;
			}else {acc+=1}
		}
		
		return acc;

	},0)
	
}
