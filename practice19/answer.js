var exArr =
    [
        {name: 'John', age: 42, gender: 'M'},
        {name: 'Jack', age: 34, gender: 'M'},
        {name: 'Michael', age: 40, gender: 'M'},
        {name: 'Kendra', age: 48, gender: 'F'}
    ];
var keys =
    {
        name: "name",
        age: "age",
        gender: "gender"
    };
/** @function - Function that Takes a list of objects, and returns an array of those objects, sorted by their property 'name'.
 * @name findFactors
 * @param {Object[]} arr - Array of objects to be sorted.
 * @param {Object} sortPram - Key to use for sorting.
 * @return {Object[]} - Returns the sorted array.
 */
function findFactors(arr, sortPram)
{
    var i, iPlus1, temp;

    for(i = 0; i < arr.length - 1; i++)
    {
        iPlus1 = i + 1;

        if (arr[i][sortPram] > arr[iPlus1][sortPram])
        {
            temp = arr[i];
            arr[i] =  arr[iPlus1];
            arr[iPlus1] = temp;
            i = -1;
        }
    }
    return arr;
}
