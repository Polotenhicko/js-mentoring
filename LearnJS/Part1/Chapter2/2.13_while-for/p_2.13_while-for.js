// https://www.codewars.com/kata/544aed4c4a30184e960010f4/javascript
// 7 kyu Find the divisors!

function divisors(integer) {
  const result = [];
  for (let i = 2; i < integer; i++) {
      if (integer % i === 0) { result.push(i); };
    };
  return result.length ? result : `${integer} is prime`;
};


// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/javascript
// 8 kyu Reversed Strings

function solution(str){
  let i = str.length - 1;
  let result = '';
  
  while (i >= 0) {
    result += str[i];
    i--;
  }
  return result;
};


// https://www.codewars.com/kata/54ff3102c1bad923760001f3/javascript
// 7 kyu Vowel Count

function getCount(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[aeiou]/g)) { sum++ };
  }
  return sum;
}