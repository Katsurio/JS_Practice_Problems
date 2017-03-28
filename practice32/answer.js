var superVar = "Supers";
/** @function - Function that finds the middle of a string.
 * @name findMid
 * @param {String} str - A string.
 * @return {String} - Returns a string. If the string is an odd number of characters, it returns 1 letter. If it is an even number of characters, it returns 2 characters.
 */
function findMid(str)
{
    var length = str.length,
        midLetter = Math.floor(length / 2);
    if(length % 2 === 1)
    {
        return str.substr(midLetter, midLetter + 1);
    }
    else
    {
        return str.substr(midLetter - 1, midLetter);
    }
}
console.warn(findMid(superVar));