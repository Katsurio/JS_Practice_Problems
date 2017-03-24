var piggyLatin = "Katsurio is the king";
/** @function - Function that will translate text into "Pig Latin".
 * @name translate
 * @param {String} strPram - The string to be translated into pig latin.
 * @return {String} - Returns the input string translated into pig latin.
 */
function translate(strPram)
{
    var endStr,
        new2ndWord,
        new1stWord,
        newWord,
        first_letter,
        first_2_letters,

        vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"],

        consonantBlends = ["bl", "br", "ch", "ck", "cl", "cr", "dr", 'fl', 'fr', 'gh', 'gl', 'gr', 'ng', 'ph', 'pl', 'pr', 'qu', 'sc', 'sh', 'sk', 'sl', 'sm', 'sn', 'sp', 'st', 'sw', 'th', 'tr', 'tw', 'wh', 'wr'];

    var words = strPram.split(" ");
    var newString = [];
    for (var i = 0; i < words.length; i++)
    {
        first_letter = words[i].charAt(0);
        first_2_letters = words[i].substr(0,2);

        if (vowels.indexOf(first_letter) != -1)
        {
            newWord = words[i] + "way";
            newString.push(newWord);
        }

        else if (consonantBlends.indexOf(first_2_letters) != -1)
        {
            new2ndWord = words[i].slice(0, 2) + "ay";
            new1stWord = words[i].slice(2, words[i].length) + " ";
            newString.push(new1stWord + new2ndWord);
        }

        else
        {
            new2ndWord = words[i].slice(0, 1) + "ay";
            new1stWord = words[i].slice(1, words[i].length) + " ";
            newString.push(new1stWord + new2ndWord);
        }
    }
    endStr = newString.join(" ");
    return endStr;
}
console.log(translate(piggyLatin));