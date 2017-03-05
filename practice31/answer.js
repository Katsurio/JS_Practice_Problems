/** @function - Function that returns a random element from either a range of 2 numbers or an array.
 * @name randomRange
 * @param {Number} startNum - Beginning number.
 * @param {Number} endNum - Ending number.
 * @return {Number} - Returns either a random element from within the range of the two numbers, or returns a random element from an array.
 */
function coCoCoComboMath(num1, num2, num3, num4, num5) {
    var output = ((((num1 * num2) + num3) / num4) - num5);
    return output;
}
console.warn(coCoCoComboMath(10,3,5,5,6));