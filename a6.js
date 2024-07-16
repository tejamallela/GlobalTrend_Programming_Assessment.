function capitalizeWords(str) {
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

// Example usage
const sentence = "hello tejasree mallela!";
const result = capitalizeWords(sentence);
console.log(result);