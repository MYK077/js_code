var input = prompt('enter a value');
var controlVal = input / 2 + 3;
var multiplier = function(number, phase) {
	var val = number * controlVal + phase;
	console.log(val);
};