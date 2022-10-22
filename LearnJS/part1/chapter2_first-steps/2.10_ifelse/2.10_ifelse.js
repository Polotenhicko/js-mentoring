// https://learn.javascript.ru/ifelse

// Если аргумент инструкции `if(arg){}` = true, выполняется код в блоке инструкции
// Если аргумент инструкции `if(arg){}` = false, выполняется код в блоке инструкции `else{}`

// Тернарная запись - condition ? caseTrue : caseFalse

// Task 1
if ("0") {              
    alert( 'Привет' );  // alert запускается
  }


// Task 2
let a = prompt('Какое «официальное» название JavaScript?', '')
a === 'ECMAScript' ? alert('Верно!') : alert('Не знаете? ECMAScript!')


// Task 3
let b = prompt('Введите число...', '')
if (b > 0){
    alert(1)
} else if (b < 0){
    alert(-1)
} else {
    alert(0)
};


// Task 4
let result;
a + b < 4
    ? result = 'Мало'
    : result = 'Много';


// Task 5
let message;

login == 'Сотрудник' 
    ? message = 'Привет'
    : login == 'Директор'
        ? message = 'Здравствуйте'
        : login == ''
            ? message = 'Нет логина'
            : message = '';
