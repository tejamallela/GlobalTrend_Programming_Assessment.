function removeDuplicates(array) {
    const uniqueSet = new Set(array);

    return Array.from(uniqueSet);
}

const array = [1, 2, 2, 3, 4, 4, 5];
const result = removeDuplicates(array);
console.log(result);  
