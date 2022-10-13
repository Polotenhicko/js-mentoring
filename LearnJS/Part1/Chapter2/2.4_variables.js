// https://learn.javascript.ru/variables

// Переменная – это «именованное хранилище» для данных. 
// Создать можно с помощью `let` (можно переписать) и `const` (нельзя переписать)
// Имя не может начинаться с цифры и содержать что-то кроме букв, цифр, `$` и `_`

let changeable
changeable = 'example'

const unchangeable = 'example2'

// Константы «жёстко закодированных» значений (известные до выполнения кода), записываются в стиле `COLOR_RED = "#F00";`


// Task 1
let admin, name
name = 'Джон'
admin = name
console.log(admin)

// Task 2
let ourPlanetName
let currentUserName

// Task 3
const BIRTHDAY = '18.04.1982'; // Константа «жёстко закодированна»
const age = someCode(BIRTHDAY); // Константа вычисляется в ходе выполнения кода