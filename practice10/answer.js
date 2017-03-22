/** @function - Function definition that achieves the output with the given input.
 * @name permutations
 * @param {String} str - A string of letters.
 * @return {String[]} - Returns an array of strings that contain all the possible letter combinations.
 */
var abc = "abc";
function permutations(str) {
    var charArr = str.split("");
    var outputArr = [str];
    var i = 1;
    var length = str.length;
    var arrMaxLength = (length) * (length - 1) * (length - 2);
    do {
        var tempArr = [];
        var randomChar = charArr[Math.floor((Math.random() * length) + 1)];
        if (tempArr.indexOf(randomChar) === -1) {
            tempArr.push(randomChar);
        }

    } while (i < arrMaxLength);
//            for (i = 0; i < arrMaxLength; i++) {
//
//            }
}