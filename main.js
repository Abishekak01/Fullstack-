// Create an array of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to check if a number is even
function isEven(number) {
    return number % 2 === 0;
}

// Filter out the even numbers
let evenNumbers = numbers.filter(isEven);

// Log the even numbers to the console
console.log(evenNumbers);
