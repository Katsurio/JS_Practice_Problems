/** @function - Function definition that achieves the output with the given input.
 * @name mathSequence
 * @param {Number} numOne - First number.
 * @param {Number} numTwo - Second number.
 * @return {Object} - Returns the resulting output:
 - ["2+5=7", "2-5=-3", "2*5=10", "2/5=0.4"].
 */
function mathSequence(numOne, numTwo) {
    var output = [];

    var mathOps =
        {
            add: numOne + " + " + numTwo + " = " + (numOne + numTwo),
            sub: numOne + " - " + numTwo + " = " + (numOne - numTwo),
            multi: numOne + " x " + numTwo + " = " + (numOne * numTwo),
            divi: numOne + " / " + numTwo + " = " + (numOne / numTwo)
        };

    output.push(mathOps.add, mathOps.sub, mathOps.multi, mathOps.divi);
    return output;
}
console.log(mathSequence(2, 5));