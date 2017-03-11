/** @function - Function that simultaneously counts up on one variable, while counting down on another. The only code inside the for loop should be a console.log that lists both variables
 * @name bipolarBearLoop
 * @param {Number} incr - Number to increment.
 * @param {Number} decr - Number to decrement.
 * @return {Number[]} - Returns nothing but console logs.
 */
function bipolarBearLoop(incr, decr) {
    var i = incr;
    var j = decr;
    for (i, j; i < j, j > i; i++, j--) {
        console.log("i: " + i + " j: " + j);
    }
}
console.log(bipolarBearLoop(24, 45));