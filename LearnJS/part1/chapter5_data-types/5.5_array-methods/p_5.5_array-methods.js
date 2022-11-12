// Task 1
// 6 kyu Are they the "same"?
// https://www.codewars.com/kata/550498447451fbbd7600041c/javascript
function comp(array1, array2){
  return !!array1 && !!array2 &&
      array1.map(n => n*n).sort().join() === array2.sort().join();
}

// Task 2
// 7 kyu Descending Order
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/solutions/javascript
function descendingOrder(n) {
    return +n.toString()
        .split('')
        .sort((a, b) => b - a)
        .join('')
}
// Task 3
// 6 kyu Duplicate Encoder
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/javascript
function duplicateEncode(word){
  return word
      .split('')
      .map((x) => word
          .split('')
          .filter(l => l.toLowerCase() === x.toLowerCase()).length > 1 ? ')' : '('
      )
      .join('')
}

// Task 4
// 6 kyu Find the odd int
// https://www.codewars.com/kata/54da5a58ea159efa38000836/javascript
const findOdd = (xs) => {
for (let i of xs) {
  if (xs.filter(n => n === i).length % 2 === 1) { return i; }
}
  return 0;
};