// https://learn.javascript.ru/alert-prompt-confirm

/*
 * `alert(text)`               - Модалка с кнопкой ок и текстом
 * `prompt(title, ?default)`   - Модалка с ок, отмена и инпутом (default - необязательный плэйсхолдер инпута)
 * `confirm(text)`             - Модалка с ок, отмена и текстом
 */

// Модальные методы останавливают работу скриптов пока не закрыты

let age = prompt('Сколько тебе лет?', 100);
alert(`Тебе ${age} лет!`); // Тебе 100 лет!

let isBoss = confirm("Ты здесь главный?");
alert( isBoss ); // true, если нажата OK


// Task 1
let userName = prompt('Как тебя зовут?')
alert(userName)
