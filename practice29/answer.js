/** @function - Function that does basic mathematical operations.
 * @name doMath
 * @param {Number} num1 - First operand.
 * @param {Number} num2 - Second operand.
 * @param {String} operator - The desired operator.
 * @return {Number} - Returns the result of the mathematical operation.
 */
function doMath(num1, num2, operator) {

    if (operator == "+")
    {
        return (num1 + num2);
    }

    else if (operator == "-")
    {
        return (num1 - num2);
    }

    else if (operator == "*" || operator == "x" || operator == "X")
    {
        return (num1 * num2);
    }

    else if (operator == "/")
    {
        return (num1 / num2);
    }

    else
    {
        console.warn("Please check your input(s) and try again.")
    }
}

console.log(doMath(2, 3, "+"));