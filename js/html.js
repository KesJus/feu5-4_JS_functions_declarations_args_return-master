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

//return uzdaviniai 1.