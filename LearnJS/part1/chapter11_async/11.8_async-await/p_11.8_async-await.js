// Task 1
// Что будет в консоли?
const delayAndGetRandom = (ms) => {
  return new Promise(resolve => setTimeout(
      () => {
        const val = Math.trunc(Math.random() * 100);
        resolve(val);
      }, ms
  ));
};

async function fn() {
  const a = await 9;
  const b = await delayAndGetRandom(1000);
  const c = await 5;
  await delayAndGetRandom(1000);
  console.log(`random number was: ${b}`);
  return a + b * c;
}

// Execute fn
fn().then(console.log);                     // 9 + -random- * 5 (after 2 sec)


// Task 2
// Напишите функцию, которая будет выводить 10 чисел с интервалом 1 сек
async function intervalNums() {
  for (let i = 1; i <= 10; i++) {
    console.log(await new Promise(resolve => setTimeout(() => resolve(i), 1000)));
  }
}
intervalNums();