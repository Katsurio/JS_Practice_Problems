var myArray = ['cat', 'caterpillar', 'whale', 'accurate', 'smile', 'cactus', 'cute'];
var word = 'cat';

/** @function - Function that takes in a string and an array of strings, and outputs an array of strings that contain the same letters as the single input string.
 * @name fittingWords
 * @param {String} str - A string to find in the array.
 * @param {String} arrOstrs - An array of strings.
 * @return {String[]} - Returns an array of strings that contain the same letters as the single input string.
 */
function fittingWords(str, arrOstrs)
{
    var i,
        output = [],
        regex = /[str]+/gi;

    for (i = 0; i < arrOstrs.length; i++)
    {

        var currIdxVal = arrOstrs[i],
            regexResult = regex.test(currIdxVal),
            currIdxLength = currIdxVal.length,
            strLength = str.length;

        if (regexResult && currIdxLength >= strLength)
        {
            output.push(arrOstrs[i]);
        }
    }
    return output;
}
console.log(fittingWords(word, myArray));