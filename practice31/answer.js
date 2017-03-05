/** @function - Function that multiplies the 1st number by the 2nd number; the result of that, it adds the 3rd number; the result of that, it divides by the 4th number; the result of that, it subtracts the 5th number.
 * @name coCoCoComboMath
 * @param {Number} num1 - First number.
 * @param {Number} num2 - Second number.
 * @param {Number} num3 - Third number.
 * @param {Number} num4 - Fourth number.
 * @param {Number} num5 - Fifth number.
 * @return {Number} - Returns the result of num1 * num2 + num3 / num4 - num5.
 */
function coCoCoComboMath(num1, num2, num3, num4, num5) {
    var output = ((((num1 * num2) + num3) / num4) - num5);
    return output;
}
console.warn(coCoCoComboMath(10,3,5,5,6));