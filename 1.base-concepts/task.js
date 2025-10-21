"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	const d = b ** 2 - 4 * a * c;

	if (d < 0) {
		return arr; // нет корней
	} else if (d === 0) {
		const x = -b / (2 * a);
		arr.push(x);
	} else {
		const x1 = (-b + Math.sqrt(d)) / (2 * a);
		const x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1, x2);
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	const P = percent / 100 / 12;
	const S = amount - contribution;

	if (S <= 0) {
		return 0;
	}

	const payment = S * (P + (P / ((1 + P) ** countMonths - 1)));
	const totalAmount = payment * countMonths;

	return Number(totalAmount.toFixed(2));
}