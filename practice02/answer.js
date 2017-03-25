var myArray = ['hello', 45, 'Bob', 'what', '23'];
/** @function - Function that takes in an array and reverses it.
 * @name totalReverse
 * @param {Array} arr - An array of anything.
 * @return {Array} - Returns an array that is in reverse order from the input array.
 */
function totalReverse(arr)
{
    var i,
        temp = [];

    for (i = arr.length - 1; i >= 0; i--)
    {
        temp.push(arr[i]);
    }
    return temp;
}
console.log(totalReverse(myArray));