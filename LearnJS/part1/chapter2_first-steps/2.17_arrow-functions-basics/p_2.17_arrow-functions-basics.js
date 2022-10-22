// https://www.codewars.com/kata/572ab0cfa3af384df7000ff8/javascript
// 7 kuy Training JS #22: Unlock new skills--Arrow function,spread operator and deconstruction

'use strict'
const shuffleIt = (arr,...ex) => {
  let [a,b] = []
  for ([a,b] of ex) [arr[a],arr[b]]=[arr[b],arr[a]] 
  return arr;
};

console.log(shuffleIt([1,2,3,4,5],[1,2]))               // [1,3,2,4,5]
console.log(shuffleIt([1,2,3,4,5],[1,2],[3,4]))         // [1,3,2,5,4]
console.log(shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]))   // [1,3,5,2,4]