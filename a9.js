function filterEvenNumbers(array) {
    return array.filter(number => number % 2 !== 0);
}

// Example 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = filterEvenNumbers(numbers);
console.log(result);  // Output: [1, 3, 5, 7, 9]
