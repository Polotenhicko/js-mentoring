// https://www.codewars.com/kata/57096af70dad013aa200007b/javascript
// 8 kyu Logical calculator

const ops = {
  'AND': (array) => array.includes(false) ? false : true,
  'OR': (array) => array.includes(true) ? true : false,
  'XOR': (array) => array.reduce((sum, e) => sum ^ e) ? true : false
};

const logicalCalc = (array, op) => ops[op](array);
