function toTitleCase(str) {
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}

// Example 
const sentence = "hello tejasree mallela, good night";
const result = toTitleCase(sentence);
console.log(result);  
