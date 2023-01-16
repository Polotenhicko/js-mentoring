// https://learn.javascript.ru/microtask-queue


// Очередь микрозадач (PromiseJobs, microtask queue) - когда промис выполнен, его обработчики (then/catch/finally) попадают в очередь,
// которая начинается после выполнения текущего кода
// Если цепочка (then/catch/finally) - то каждый ставится в очередь, а потом выполняется после текущего кода
const promise = Promise.resolve();
promise.then(() => console.log("промис выполнен")).then(() => console.log('промис2 выполнен'));
console.log("код выполнен");                            // Output: 'код выполнен' 'промис выполнен' 'промис2 выполнен'