// function reverseInteger(num: number): number {
// 	const reversedString = Math.abs(num).toString().split('').reverse().join('');

// 	const reversedNumber = parseInt(reversedString, 10) * Math.sign(num);
// 	return reversedNumber;
// }

// console.log(reverseInteger(123456789));
// console.log(reverseInteger(-123456789));

// TASK ZN:

// function rotateArray(arr: number[], n: number): number[] {
// 	const length = arr.length;
// 	const index = n % length;

// 	const firstPart = arr.slice(index);
// 	const secondPart = arr.slice(0, index);

// 	return [...firstPart, ...secondPart];
// }

// console.log(rotateArray([1, 2, 3, 4, 5, 6], 3));

function areArraysEqual(arr1: number[], arr2: number[]): boolean {
	if (arr1.length !== arr2.length) {
		return false;
	}

	arr1.sort();
	arr2.sort();

	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}

	return true;
}

console.log(areArraysEqual([1, 2, 3], [3, 1, 2]));
console.log(areArraysEqual([1, 2, 3], [3, 1, 2, 1]));
console.log(areArraysEqual([1, 2, 3], [4, 1, 2]));
