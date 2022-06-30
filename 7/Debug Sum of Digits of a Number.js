const getSumOfDigits = (n) =>
	String(n)
		.split("")
		.map((e) => Number(e))
		.reduce((a, b) => a + b);
