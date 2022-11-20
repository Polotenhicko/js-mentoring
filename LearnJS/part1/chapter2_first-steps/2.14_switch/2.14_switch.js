// https://learn.javascript.ru/switch

// `switch(arg) {case x: ... break; default: ... break;}` - конструкция управления вариантами

// `arg` проверяется по порядку кейсов, при удовлетворении {выполняется соответствующий блок, пока не достигает `break`}, иначе выполнится `default`;

// проверка всегда строгая (===), необходимо решать проблемы соответсвия типов

// ---------------------------------------------------------------------------------------------------------------------


// Task 1
// switch => if..else transform
switch (browser) {
  case 'Edge':
    console.log( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    console.log( 'Okay we support these browsers too' );
    break;

  default:
    console.log( 'We hope that this page looks ok!' );
}


if (browser === 'Edge') {
  console.log( "You've got the Edge!" );
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
  console.log( "Okay we support these browsers too" );
} else { console.log( 'We hope that this page looks ok!' ); };


// Task 2
// if..else => switch transform
if (number === 0) {
  console.log('Вы ввели число 0');
}

if (number === 1) {
  console.log('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  console.log('Вы ввели число 2, а может и 3');
}

switch(number) {
  case 0:
    console.log('Вы ввели число 0');
    break;
  case 1:
    console.log('Вы ввели число 1');
    break;
  case 2:
  case 3:
    console.log('Вы ввели число 2, а может и 3');
    break;
}