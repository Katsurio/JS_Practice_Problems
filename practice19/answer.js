var exArr =
    [
        {name: 'John', age:42, gender:'M'},
        {name: 'Jack', age:34, gender:'M'},
        {name: 'Michael',age:40, gender: 'M'},
        {name: 'Kendra',age:48, gender:'F'}
    ];
var keys =
    {
        name: "name",
        age: "age",
        gender: "gender"
    }
/** @function - Function that Takes a list of objects, and returns an array of those objects, sorted by their property 'name'.
 * @name findFactors
 * @param {Object[]} arr - Array to be sorted.
 * @return {Object[]} - Returns the sorted array.
 */
function findFactors(arr, sortPram)
{
    var i,
        iPlus1,
        temp;
    for(i = 0, iPlus1 = i + 1; i < arr.length; i++)
    {
        var tempBase = arr[i][sortPram],
            tempNext = arr[iPlus1][sortPram];

        if (tempBase > tempNext)
        {
            temp = arr[i];
            arr[i] =  arr[iPlus1];
            arr[iPlus1] = temp;
            i = -1;
        }
    }
    return arr;
}

console.log(findFactors(exArr, keys.age));
