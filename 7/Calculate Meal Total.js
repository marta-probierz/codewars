const calculate_total = (subtotal, tax, tip) =>
	(subtotal + (subtotal * tax) / 100 + (subtotal * tip) / 100).toFixed(2) * 1;
