function fibs(num) {
	let array = [];
	for (i = 0 ; i < num; i++) {
		array.push(fibs(i));
	};
	return array;
};

function fibsRec(num) {
	let n = Number(num);
	if (isNaN(n)) return "Must be a number";
	if (n < 0) return "Can't be below 0";
	if (n === 0) return 0;
	if (n === 1) return 1;
	return fibs(n - 1) + fibs(n - 2);
};

console.log(fibsRec(8));
console.log(fibs(8));