function fibs(num) {
	let n = Number(num);
	if (isNaN(n)) return "Must be a number";
	if (n < 0) return "Can't be below 0";
	let array = [];
	for (i = 0 ; i < num; i++) {
		if (i === 0) array.push(0)
		else if (i === 1) array.push(1);
		else array.push(array[i - 1] + array[i - 2]);
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