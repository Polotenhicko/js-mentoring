// https://learn.javascript.ru/coding-style

// Task 1
function pow(x,n)
{
  let result=1;
  for(let i=0;i<n;i++) {result*=x;}
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'')
if (n<=0)
{
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
}
else
{
  alert(pow(x,n))
}


// solution
function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) { result *= x; };
  return result;
}

let x2 = prompt('x?', '');
let n2 = prompt('n?', '');
if (n <= 0) {
  alert(`Степень ${n2} не поддерживается, 
      введите целую степень, большую 0`);
} else { alert( pow(x, n) ) };