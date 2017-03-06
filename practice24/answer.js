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