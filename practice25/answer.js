var first_array = [3, -5, 15, 4];
var second_array = [3, 18, -5, -4];

/** @function - Function that adds all the values from one array with the other array
 * @name addArrays
 * @param {Number[]} firstArr - First array of numbers
 * @param {Number[]} needleArr - Second array of numbers
 */
function addArrays(firstArr, needleArr) {
    if (firstArr.length !== needleArr.length) {
        alert("Your input arrays aren't the same length!" + "<br>" + "Please try again.");
    }
    var output = [];
    var i, addedNum;
    for (i = 0; i < firstArr.length; i++) {
        addedNum = firstArr[i] + needleArr[i];
        output.push(addedNum);
    }
    return output;
}

console.log(addArrays(first_array, second_array));