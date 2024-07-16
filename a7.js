function generateFibonacci(n) {
    if (n <= 0) {
        return [];
    }
    if (n === 1) {
        return [0];
    }

    const fibonacciSequence = [0, 1];

    for (let i = 2; i < n; i++) {
        fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
    }

    return fibonacciSequence;
}
const n = 10;
const result = generateFibonacci(n);
console.log(result);  
