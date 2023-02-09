'use strict';
console.log('html.js file was loaded');
function setDark() {
    document.body.className = 'darkMode'
    console.log('document.body.className===', document.body.className);
}

function setLight() {
    document.body.className = ''
    console.log('document.body.className===', document.body.className);
}

function onOFF() {

    if (document.body.className === 'darkMode') {
        document.body.className = ''
        console.log('document.body.className===', 'lightMode');
    } else {
        document.body.className = 'darkMode'
        console.log('document.body.className===', document.body.className);
    }
}
////////////// uzd 1. ToSec
let mn
function minutesToSeconds(mn) {
    let getSeconds = mn * 60
    console.log(`${mn} turi ${getSeconds} sekundziu`);
    return getSeconds
}
minutesToSeconds(10.5)

//////////// 2. parasyti funkcija kuri argumentais paima kambario sienu ilgi ploti ir auksti ir paskaiciuoja ir atspausdina sienu plota.
// 3. padaryti kad sienu plota funkcija grazintu
function kambarioPlotas(ilgis, plotis, aukstis) {
    let plotas = (ilgis + plotis) * aukstis * 2
    console.log(`kai kambario ${ilgis} plotis ${plotis} ir aukstis ${aukstis}, plotas yra ${plotas}`);
    return plotas
}
let kamb = kambarioPlotas(4, 3, 2.5)

// 4. parasyti funkcija flow() kurioje sudedam visu auksiau aprasytu funkciju rezultatus ir grazinam ir ispausdinam konsoleje.
let kamb2 = kambarioPlotas(3.4, 3, 2.5)
let kamb3 = kambarioPlotas(3.4, 3.3, 2.5)
console.log(`pagr.kambario plotas ${kamb} m2`);
console.log(`kito.kambario plotas ${kamb2} m2`);
console.log(`mieg.kambario plotas ${kamb3} m2`);

//return uzdaviniai 1. parasyti funkcija multi kuri sudaugina pirma parametra su antru ir grazina
function daugyba(a, b) {
    let rez = a * b
    console.log(`${a} * ${b} === ${rez}`);
    return rez
}
let rez = daugyba(6, 32.5)

//2. parasyti funkcija divide kuri padalina pirma parametra is antro ir grazina
function dalyba(a, b) {
    let rez2 = a / b
    console.log(`${a} / ${b} === ${rez2.toFixed(4)}`);
    return rez2
}
let rez2 = dalyba(6, 32.5)
//3.parasyti funkcija avg kuri gauna 2 parametrus ir grazina ju vidurki
function avg(a, b) {
    let rez3 = (a + b) / 2
    console.log(`vidurkis ${a} ir ${b} === ${rez3.toFixed(2)}€`);
    return rez3
}
let rez3 = avg(6, 9)
//4.parasyti funkcija flow() kurioje sudedam visu auksiau aprasytu funkciju rezultatus ir grazinam ir ispausdinam konsoleje.
function flow(rez, rez2, rez3) {
    console.log('------------Total---------');
    console.log(`daugybos rezultatas === ${rez}`);
    console.log(`dalyba === ${rez2.toFixed(4)}`);
    console.log(`vidurkis === ${rez3.toFixed(2)}€`);
}
flow(rez, rez2, rez3)