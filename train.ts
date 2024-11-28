

function reverseInteger(num: number): number {
	const reversedString = Math.abs(num).toString().split('').reverse().join('');

	const reversedNumber = parseInt(reversedString, 10) * Math.sign(num);
	return reversedNumber;
}

console.log(reverseInteger(123456789));
console.log(reverseInteger(-123456789));
