var myArray = ['mouse', 'cat', 'dog', 'human'];
/** @function - Function that takes in an array of strings and outputs a new array with the same strings in alphabetical order.
 * @name sort
 * @param {String[]} arr - An array of strings.
 * @return {String[]} - Returns an array containing all the strings from the input array but in alphabetical order.
 */
function sort(arr) {
    var temp, i;
    for(i = 0; i < arr.length; i++){
        if (arr[i] > arr[i+1]){
            temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
            i = -1;
        }
    }
    return arr;
}
console.log(sort(myArray));