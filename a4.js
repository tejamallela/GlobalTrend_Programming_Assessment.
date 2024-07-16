function areAnagrams(str1, str2) {
    // Helper function to create a sorted character array from a string
    function sortString(str) {
        return str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    }

    // Compare the sorted versions of the strings
    return sortString(str1) === sortString(str2);
}

// Example usage
const string1 = "listen";
const string2 = "silent";
const result = areAnagrams(string1, string2);
console.log(result);  // Output: true

const string3 = "hello";
const string4 = "world";
const result2 = areAnagrams(string3, string4);
console.log(result2);  // Output: false
