/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
const arr = [1,2,3,4];
result = arr.map(x => x * 2 - 1);
console.log(result); 

//export result
module.exports = result;