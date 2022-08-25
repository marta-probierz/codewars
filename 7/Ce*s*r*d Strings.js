function uncensor(infected, discovered) {
	let i = -1;
	return infected.replace(/\*/g, (v) => {
		i += 1;
		return discovered[i];
	});
}
