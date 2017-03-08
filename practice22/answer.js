var input_array =
    [
        {name: 'John', age: 42, gender: 'M'},
        {name: 'Jack', age: 34, gender: 'M'},
        {name: 'Michael', age: 40, gender: 'M'},
        {name: 'Kendra', age: 48, gender: 'F'}
    ];


/** @function - Function that sorts an array of objects by desired obj. key
 * @name sortObjListByName
 * @param {Object[]} objList - The array of objects to be sorted
 * @param {String} sortKey - The obj key desired for sorting
 * @returns {Object[]} - Returns the sorted objects array
 */

function sortObjListByName(objList, sortKey) {
    var i, iPlus1, temp, compareI, compareIPlus1;
    var skeletonKey = "." + sortKey;
    for (i = 0; i < objList.length - 1; i++) {
        compareI = objList[i] + skeletonKey;
        compareIPlus1 = objList[i + 1] + skeletonKey;

        iPlus1 = i + 1;
        if (compareI > compareIPlus1) {
            temp = objList[i];
            objList[i] = objList[i + 1];
            objList[i + 1] = temp;
            i = -1;
        }
    }
    return objList;
}
console.log(sortObjListByName(input_array));