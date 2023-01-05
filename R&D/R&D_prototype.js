// Хз где брать упражнения, есть 2 задачки на методы
// https://www.codewars.com/kata/53381a646068efc50100072c/train/javascript  - 5 kyu Function.prototype.clone
// https://www.codewars.com/kata/53c2c3e78d298dddda000460                   - 6 kyu Implementing Array.prototype.groupBy method



Function.prototype.clone = function () {
  console.log(JSON.stringify(this.prototype));
  return new Function( );
};

//


function sum (a, b) {
  return a + b;
}
console.log(sum(5, 10));  // Output: 15


const sum2 = sum.clone();
console.log(sum2(5, 10));