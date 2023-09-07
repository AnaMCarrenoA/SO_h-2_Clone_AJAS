/**
 * mediante el while for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let array = [1,2,3,4,5,6,7,8];
let result = [];
let i = 0;
while (i < array.length) {
  if (array[i] % 2 !== 0) {
    result.push(array[i]);
  }
  i++;
}
console.log(result); // [1,3,5,7]

//export result
module.exports = result;