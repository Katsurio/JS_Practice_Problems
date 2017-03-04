/** @function - Function that returns a random element from either a range of 2 numbers or an array.
 * @name randomRange
 * @param {Number} startNum - Beginning number.
 * @param {Number} endNum - Ending number.
 * @return {Number} - Returns either a random element from within the range of the two numbers, or returns a random element from an array.
 */
function randomRange(startNum, endNum)
{
    var randArr;

    if (Array.isArray(startNum))
    {
        randArr = Math.floor(Math.random() * startNum.length);
        return startNum[randArr];
    }
    else
    {
        randArr = Math.round(Math.random() * (endNum - startNum) + startNum);
        return randArr;
    }
}

console.warn(randomRange(['a','b','c','d','e']));

