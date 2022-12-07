function fibs(n) {
	if (n === 0) return 0;
	if (n === 1) return 1;
	return fibs(n - 1) + fibs(n - 2);
};

console.log(fibs(8));