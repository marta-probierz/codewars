const pillars = (numPill, dist, width) =>
	numPill == 1 ? 0 : (numPill - 2) * width + 100 * dist * (numPill - 1);
