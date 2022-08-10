const closestMultiple10 = (num) => {
	let r = num % 10;
	let d = Math.floor(num / 10);
	return r < 5 ? d * 10 : (d + 1) * 10;
};

// or

const closestMultiple = num => Math.round(num / 10) * 10