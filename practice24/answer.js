/** @function - 2nd Way: Function that takes in 2 multi-dimensional arrays and adds the values of their corresponding indexes.
 * @name matrixAdd
 * @param - {Array.<Number[]>} arr1 -  A multi-dimensional array.
 * @param - {Array.<Number[]>} arr2 -  A multi-dimensional array.
 * @type {[*]}
 * @return {Array.<Number[]>} - Returns a multi-dimensional array.
 */
var arr1 = [[1, 2, 3], [3, 4, 5], [6, 7, 8]],
    arr2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

function matrixAdd (arr1,arr2) {
    var i,
        j,
        length,
        outerTemp1 = [],
        outerTemp2 = [],
        innerTemp1,
        innerTemp2,
        output = [];
    for (i = 0; i < arr1.length; i++)
    {
        outerTemp1 = arr1[i];
        outerTemp2 = arr2[i];
        tempOutput = [];
        length = arr1[i].length;
        for (j = 0; j < length; j++)
        {
            innerTemp1 = outerTemp1[j];
            innerTemp2 = outerTemp2[j];
            tempOutput.push(innerTemp1 + innerTemp2);
        }
        output.push(tempOutput);
        tempOutput = [];
    }
    return output;
}
console.warn(matrixAdd(arr1, arr2));

/** @function - 1st Way: Function that takes in 2 multi-dimensional arrays and adds the values of their corresponding indexes.
 * @name matrixAdd
 * @param - {Array.<Number[]>} arr1 -  A multi-dimensional array.
 * @param - {Array.<Number[]>} arr2 -  A multi-dimensional array.
 * @type {[*]}
 * @return {Array.<Number[]>} - Returns a multi-dimensional array.
 */
// function matrixAdd(arrOne, arrTwo)
// {
//
//     var i,
//         j,
//         addedVal,
//         tempArr,
//         output = [],
//         length = arrOne.length;
//
//     for (i = 0; i < length; i++)
//     {
//         tempArr = [];
//
//         for (j = 0; j < length; j++)
//         {
//             addedVal = parseInt(arrOne[i][j]) + parseInt(arrTwo[i][j]);
//             tempArr.push(addedVal);
//         }
//         output.push(tempArr);
//     }
//     return output;
// }
//
// var result = matrixAdd(arr1, arr2);
// console.log(result);