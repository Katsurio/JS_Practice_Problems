var abc = "abc";
/** @function - Function definition that achieves the output with the given input.
 * @name permutations
 * @param {String} str - A string of letters.
 * @return {String[]} - Returns an array of strings that contain all the possible letter combinations.
 */
function permutations(str)
{
    var tempArr,
        randomChar,
        charArr = str.split(""),
        outputArr = [str],
        i = 1,
        length = str.length,
        arrMaxLength = (length) * (length - 1) * (length - 2);
    do {
        tempArr = [];
        randomChar = charArr[Math.floor((Math.random() * length) + 1)];

        if (tempArr.indexOf(randomChar) === -1)
        {
            tempArr.push(randomChar);
        }

    } while (i < arrMaxLength);
//            for (i = 0; i < arrMaxLength; i++)
//            }
}