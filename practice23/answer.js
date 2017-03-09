var factNumb = 10;

/** @function - Function that finds all of the factors of a given number.
 * @name findFactors
 * @param {Number} num - A number to find the factors of it.
 * @return {Number[]} - Returns an array of all numbers that are a factor of factNum.
 */
function findFactors(num)
{
    var i,
        output = [];

    for (i = 1; i <= num; i++)
    {
        if(num % i === 0)
        {
            output.push(i);
        }
    }
    return output;
}

console.log(findFactors(factNumb));