var expArr = [4, 2, 8, 6, 3, 9];

/** @function - Function that takes one array and finds all other elements of the array that are factors of its element
 * @name ecks_Factor
 * @param {Number[]} arr - First array to search
 * @return {Object} - Returns an object of arrays that contain factors of their property
 */
function ecks_Factor(arr) {

    var output = {},
        i, j, temp, currIdxVal, factors;

    for (i = 0; i < arr.length; i++) {
        temp = arr[i];
        output["" + temp + ""] = [];

        for (j = 0; j < arr.length; j++) {
            currIdxVal = arr[j];
            if (temp % currIdxVal === 0 && temp !== currIdxVal) {
                output[temp].push(currIdxVal);
            }
        }
    }
    return output;
}
console.log(ecks_Factor(expArr));