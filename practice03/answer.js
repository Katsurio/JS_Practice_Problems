var myarray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];
/** @function - Function that sorts an array into a multidimensional array grouped by data type.
 * @name wunTooMullTea
 * @param {Array} arr - An array of anything.
 * @return {Array.<Array>} - Returns a multidimensional array grouped by data type.
 */
function wunTooMullTea(arr) {
    var temp = [[],[],[]];
    for (var i = 0; i < arr.length; i++) {
        switch (typeof arr[i]) {
            case "boolean":
                temp[2].push(arr[i]);
                break;
            case "number":
                temp[1].push(arr[i]);
                break;
            case "string":
                temp[0].push(arr[i]);
                break;
            default:
                alert("Something's not right");
        }
    }
    return temp;
}
console.log(wunTooMullTea(myarray));