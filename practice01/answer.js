var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];
/** @function - Function that takes in a string and an array of strings, and then outputs an array of strings that are longer than the single input string.
 * @name biggerWords
 * @param {String} str - A string.
 * @param {String[]} strArr - An array of strings.
 * @return {String[]} - Returns all the words from the input array (parameter 2) that are longer than the input string (parameter 1).
 */
var biggerWords = function(str, strArr) {
    var i, output = [];
    for (i = 0; i < strArr.length; i++) {
        if (strArr[i].length > str.length) {
            output.push(strArr[i]);
        }
    }
    return output;
};
biggerWords('whales', myArray);


const biggerWordsRefactored = (str, strArr) => {
    return strArr.filter((word) => {
        return word.length > str.length;
    });
};
console.log(biggerWordsRefactored('whales', myArray));