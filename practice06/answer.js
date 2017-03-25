/** @function - Function that takes one parameter and prints out the Fibonacci sequence based on the input parameter.
 * @name fibonacciSequence
 * @param {Number} num - A number.
 * @return {Number[]} - Returns the Fibonacci sequence to the number of spaces set by the function's parameter (num) starting from zero.
 */
function fibonacciSequence(num) {
    var i,
        temp,
        output = [0, 1];
    for (i = 1; i < num - 1; i++) {
        temp = arr[i] + arr[i - 1];
        output.push(temp);
    }
    return output;
}
console.log(fibonacciSequence(12));