'use strict';
console.log('return.js file was loaded');

let a = 15;
let b = 20;
let c = 5;

// sukurti funckija calcSum() gauna 2 argumentus ir grazina suma

// panaudoti calcSum() ir suskaiciuoti a ir b suma ir poto prie gauto rezulato prideti c

function calcSum(n1, n2) {
  let sum = n1 + n2;
  console.log('sum ===', sum);
  // return 'Va stai ka dabar grazina funkcija';
  return sum;
}

// let funkcijaGrazina = calcSum(5, 14);
// console.log('funkcijaGrazina ===', funkcijaGrazina);

// let aIrBSuma = calcSum(a, b);
// console.log('aIrBSuma ===', aIrBSuma);
// let visaSuma = calcSum(aIrBSuma, c);
// console.log('visaSuma ===', visaSuma);

// 1. parasyti funkcija kuri atima is pirmo argumento antra ir grazina reiksme
// (10, 5) = 5
function atimk(x, y) {
  let minusRezult = x - y;
  console.log('minusRezult ===', minusRezult);
  return minusRezult;
}

// 2. parasyti funkcija kuri pirma argumenta padalina is antro ir grazina reiksme
// (8, 4) = 2

function padalink(x, y) {
  let divideResult = x / y;
  return divideResult;
}
// 3. suksiciuoti 1 ir antros funkciju rezultatu suma
// (5 + 2) = 7

// gaunam is funkcios grazinta reiksme ir isaugom kintamajame atimtis
let atimtis = atimk(10, 5);
console.log('atimtis ===', atimtis);

let dalyba = padalink(8, 4);
console.log('dalyba ===', dalyba);
//paprasta sudetis
let visaSuma2 = atimtis + dalyba;
console.log('visaSuma2 ===', visaSuma2);
// sudedam su funkcija
visaSuma2 = calcSum(atimtis, dalyba);
console.log('visaSuma2 ===', visaSuma2);
