// [Главы 2, 4, 5, 8] Задача с собеса
// Сложность 5/10 на собесе, обычная 3/10
// Реализовать функционал чтобы работало как ожидается:

Array.prototype.copy = function (n = 1) {
  if (n < 1) {
    return [];
  }

  let newArr = Array.from(this);
  for (let i = 1; i < n; i++) {
    newArr.splice(newArr.length, 0, ...this);
  }

  return newArr;
}

// returns new array with these rules:
console.log( [1, 2, 3].copy(2) );     // Output: [1,2,3,1,2,3]
console.log( [4].copy(3) );           // Output: [4,4,4]
console.log( [1, 2, 3].copy(1) );     // Output: [1,2,3]
console.log( [1, 2, 3].copy(-1) );    // Output: []
console.log( [1, 2, 3].copy(0) );     // Output: []
console.log( [1, 2, 3].copy() );         // Output: [1,2,3]


