'use strict';
console.log('parameters.js file was loaded');

// global variables
let n1; /// undefined
let n2 = 10;
// debugger;
function add(sk1, sk2) {
  let sum = sk1 + sk2;
  console.log(`${sk1} + ${sk2} = ${sum}`);
}

// add(5, 10);
// add(51, 10);
// add(71, 50);

function sp(message) {
  console.log('spausdinama reiksme');
  console.log(message);
  // console.log('arguments ===', arguments);
}

// sp(n2);
// sp('Laba diena');

// parasyti fn printAvg3()
// funkcija gauna tris argumentus ir isveda ju bendra suma ir vidurki i konsole
// panaudoti su bent 3 skirtingom reikmem

function printAvg3(sk1, sk2, sk3) {
  console.log('sk1, sk2, sk3 ===', sk1, sk2, sk3);
  let total = sk1 + sk2 + sk3;
  console.log('total ===', total);
  let avg = total / 3;
  console.log(`${total} / 3 === ${avg.toFixed(2)}`);
}

// printAvg3(1, 2, 3);
// printAvg3(4, 5, 6);

// function argument defaults

function sayHi(user = 'Mr or Ms') {
  console.log(`hello ${user}, how is your day?`);
}
// sayHi('Nick');
// sayHi('Jane');
// sayHi();

// 1 sukurti funkcija kuri suskaiciuos apskritimo plota kai duotas diametras
// Math.PI * r kvadratu, diametras yra 2 spinduliai
// 2 jei diametras nepaduotas tai jis lygus 5
// 3 jei paduotas diametras lygus 0 tai pranesam su konsole kad neteisingai ivestas diametras

function printCircleArea(diameter = 5) {
  if (diameter === 0) {
    // exit clause
    console.log('Iveskite didesni diametra nei 0');
    // alert('Iveskite didesni diametra nei 0');
    return;
  }

  // gauti spinduli is diametro
  let r = diameter / 2;
  // panaudoti spinduli ir suskaiciuoti plota
  let area = Math.PI * r ** 2;
  // atspausdinti plota
  console.log(`Circle with diameter ${diameter} area is ${area.toFixed(2)}`);
}
printCircleArea(10);
printCircleArea();
printCircleArea(0);
