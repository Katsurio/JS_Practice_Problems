/** @function - Function that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”..
 * @name fizzBuzz
 * @param {Number} num - The ending number.
 * @return {String[]} - Returns an array of strings consisting of the numbers 1 to the function's parameter(num) following the rules from above.
 */
function fizzBuzz(num)
{
    var i,
        output = [];

    for (i=1; i <= num; i++)
    {
        if (i % 5 == 0 && i % 3 == 0)
        {
            output.push("FizzBuzz");
        }
        else if (i % 5 == 0)
        {
            output.push("Buzz");
        }
        else if(i % 3 == 0)
        {
            output.push("Fizz");
        }
        else
        {
            output.push("" + i);
        }
    }
    return output;
}
console.log(fizzBuzz(23));