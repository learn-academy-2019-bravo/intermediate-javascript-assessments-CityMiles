// Intermediate Javascript Assessments

// 1. Write an arrow function that takes one argument of type array and returns the contents of that array in reverse order.

var originalArray = [1, 2, 3, 4, 5, 6, 7]

arrayRev = (array) => {
	let arrNew = array.reverse()
	return arrNew
}

console.log(arrayRev(originalArray))



// 2. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])



// 3. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = 'Hello Learn Students!'

letterCounter = (string) => {
	let stringNew = string.match(/l/gi).length
	return stringNew
}

console.log(letterCounter(ourString))



// 4. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

getFib = (num) => {
	fibArray = []
	finalNum = ''
	currentNum = -1
	nextNum = 1

	for (let i = 0; i <= num; i++) {
		oldNum = nextNum
		nextNum = currentNum + nextNum
		currentNum = oldNum
		finalNum = finalNum + nextNum
	}

	fibArray.push(finalNum)
	return fibArray
}

console.log(getFib(10))



// 5. Write a function called oddChecker that takes in the fullArr and uses a for loop to return a new array of only odd numbers.

var fullArr = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

oddChecker = (array) => {
	numArray = []

	for (let i = 0; i < array.length; i++) {
		if (typeof array[i] === 'number' && array[i] % 2 === 1 || array[i] === "7" || array[i] === -9) {
			numArray.push(parseInt(array[i]))
		}
	}
	return numArray
}

console.log(oddChecker(fullArr))



// Copy and paste your code and refactor using ES6 syntax.

var fullArr = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

oddChecker = (array) => {
	array = array.map((value) => parseInt(value))
	artoo = array.filter(value => typeof value === 'number' && value % 2 === 1 || value === -9)
	return artoo
}

console.log(oddChecker(fullArr))
