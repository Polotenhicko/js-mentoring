// https://learn.javascript.ru/arrow-functions-basics

// ` let func = (...args) => expression; ` - лаконичный function expression
// если 1 arg - можно без скобок, если 0 - скобки пустые
// если нужна функция в несколько строк исп. {} и return не сокращается

function fnArrowAnonimous(fn, fn2) {
  return 'hello it\'s ' + fn() + '\n' + 'hello it\'s ' + fn2();
}
console.log(fnArrowAnonimous(
  () => 'anonimous arrow function1',
  () => 'anonimous arrow function2'
  )
)

// Task 1
// Function => Arrow function
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);


let ask2 = (question, yes, no) => {
  (confirm(question)) ? yes() : no();
};
ask(
  'Вы согласны?',
  () => alert('Вы согласились.'),
  () => alert('Вы отменили выполнение.'),
);