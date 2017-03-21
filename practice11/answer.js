var myArr = [2, 3, 23, 45, 23, 45, 8, 8, 6, 5, 2, 3, 5, 1, 6, 8, 2, 20, 'cat', 13, 3];
/** @function - Function definition that achieves the output with the given input.
 * @name evenOdds
 * @param {Array} arr - An array of anything.
 * @return {Object} - Returns an object with 2 arrays in it:
 odd: an array of all the odd numbers in the array
 even: an array of all the even numbers in the array
 */
function evenOdds(arr) {
    var output = {
        odd: [],
        even: []
    };

    var i,
        numCheck,
        indexVal;

    for (i = 0; i < arr.length; i++) {
        indexVal = arr[i];
        numCheck = isNaN(indexVal);
        if (!numCheck && output.odd.indexOf(indexVal) === -1 && output.even.indexOf(indexVal) === -1) {
            if (indexVal % 2 === 0) {
                output.even.push(indexVal);
            }
            else {
                output.odd.push(indexVal);
            }
        }
    }
    return output;
}
console.log(evenOdds(myArr));