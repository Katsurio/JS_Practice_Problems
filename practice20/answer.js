var expArr = [5,3,2,5,1];
/** @function - Function that takes an array and randomizes the order without resorting to using any pre-existing array methods.
 * @name randomizer5000
 * @param {Number} arr - Array to be randomized.
 * @return {Number[]} - Returns a randomized array.
 */
function randomizer5000(arr)
{
    var temp,
        i,
        output = [],
        iRanDumb;
    for (i = arr.length; i > 0; i--)
    {
        iRanDumb = Math.floor(Math.random() * arr.length);
        temp = arr.splice(iRanDumb, 1);
        output.push(temp[0]);
    }
    return output;
}
console.warn(randomizer5000(expArr));