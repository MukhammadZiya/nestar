// function reverseInteger(num: number): number {
// 	const reversedString = Math.abs(num).toString().split('').reverse().join('');

// 	const reversedNumber = parseInt(reversedString, 10) * Math.sign(num);
// 	return reversedNumber;
// }

// console.log(reverseInteger(123456789));
// console.log(reverseInteger(-123456789));

// TASK ZN:

function rotateArray(arr: number[], n: number): number[] {
	const length = arr.length;
	const index = n % length;

	const firstPart = arr.slice(index);
	const secondPart = arr.slice(0, index);

	return [...firstPart, ...secondPart];
}

console.log(rotateArray([1, 2, 3, 4, 5, 6], 3));
