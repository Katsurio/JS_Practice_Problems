var skatCat = 'the cat in the hat';
/** @function - Function definition that converts strings into their character code equivalents.
 * @name charConverter
 * @param {String} str - A string to convert.
 * @return {String} - Returns a string that contains the input string's converted character code(s).
 */
function charConverter(str)
{
    var i,
        output,
        newStrArr = [];

    for(i = 0; i < str.length; i++)
    {
        charCode = str.charCodeAt(i);
        newStrArr.push(charCode + "");
    }

    output = newStrArr.join("");
    return output;
}
console.log(charConverter(skatCat));