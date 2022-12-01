// https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/javascript
// 5 kyu A Chain adding function

const add = function (n) {

  const addMore = function (x) {
    return add(n + x);
  };

  addMore.valueOf = function() {
    return n;
  };

  return addMore;
};
