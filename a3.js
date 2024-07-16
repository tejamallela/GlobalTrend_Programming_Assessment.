function flattenArray(nestedArray) {
    let flattenedArray = [];
    function flatten(subArray) {
        for (let item of subArray) {
            if (Array.isArray(item)) {
                flatten(item);
            } else {
                flattenedArray.push(item);
            }
        }
    }

    flatten(nestedArray);

    return flattenedArray;
}
const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8, [9, 10]]];
const result = flattenArray(nestedArray);
console.log(result);  
