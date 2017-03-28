/** @function - Function that takes a number as a parameter, and if the number is positive, it makes it negative. If it isn't a number, it returns false.
 * @name invertNegs
 * @param {Number} num - A number.
 * @return {String} - Returns a negative number or false if the parameter wasn't a number.
 */
function invertNegs(num)
{
    if (isNaN(num))
    {
        return false;
    }
    else if (num <= 0)
    {
        return num;
    }
    else
    {
        return num * -1;
    }
}
console.warn(invertNegs(43278589273891));