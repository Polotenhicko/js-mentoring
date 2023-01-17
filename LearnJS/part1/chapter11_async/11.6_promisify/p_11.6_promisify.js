// Написать функцию, которая будет промисифицировать функции (возвращать функцию, обернутую в промис)
debugger
const promisify = function (f, manyArgs = false) {
  return function (...args) {
    return new Promise((resolve, reject) => {

      function callback(err, ...results) {
        if (err) {
          reject(err);
        } else {
          resolve(manyArgs ? results : results[0]);
        }
      }

      args.push(callback);

      f.call(this, ...args);
    });
  };
}

function loadScript(src, callback) {
  const script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error('can\'t load script'));

  document.head.append(script);
}

promisify(loadScript);

