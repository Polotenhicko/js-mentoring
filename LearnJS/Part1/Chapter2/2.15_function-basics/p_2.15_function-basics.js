// Task 1
// Напишите функцию JavaScript, чтобы получить имя функции.
function getFuncName() {
  return getFuncName.name
}

// Task 2
// Напишите функцию JavaScript, которая возвращает самый длинный палиндром в заданной строке
function longestPalindrome(str1) {
  let maxLength = '';
  let currentSub = '';

  for (let i = 0; i < str1.length + 1; i++) {
    for (let j = i + 1; j < str1.length + 1; j++) {
      currentSub = str1.substring(i, j).split('').reverse().join('');
      for (let k = 0; k < str1.length; k++) {
        if (currentSub === str1.substring(i, j) && 
            str1.substring(i, j).length > maxLength.length) {
          maxLength = str1.substring(i, j);
        };
      };
    };
  };
  return maxLength;
}

console.log(longestPalindrome("abracadabra")); // aca
console.log(longestPalindrome("tatarrattat")); // tarrat