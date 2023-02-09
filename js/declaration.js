'use strict';
console.log('declaration.js file was loaded');

/*
  function FUNKCIJOS_PAVADINIMAS (argumentas1, argumentas2) {
    // funkcijos body
    // kodo blokas kuris bus vygdomas kai iskviesim funkija
  }
*/

// function declaration
// skelbiam funkija - ji nera vygdoma kol neiskvieism
function sayHi() {
  console.log('hello as esu pirma funkicja');
}

// iskviesti funkcija
// sayHi();

let n1 = 51;
let n2 = 10;

function addNums() {
  let sum; // localus tik sio funkcijo bloko kintamasis
  sum = n1 + n2; // naudoja isorinius kintamuosius
  console.log(`${n1} + ${n2} = ${sum}`);
}
addNums();
// console.log('sum ===', sum); // neegzistuoja

// sukurti fn kuri atima is n1 n2 ir atspausdina pilna atsakyma, iskviesti ir isbandyti

// aprasymas
function minusNums() {
  let minusResult = n1 - n2;
  console.log(`${n1} - ${n2} = ${minusResult}`);
}
// iskvietimas
minusNums();
