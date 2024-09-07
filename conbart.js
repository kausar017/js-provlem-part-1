// 12 inch 1 feet

function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

const kausar = inchToFeet(75);
// console.log(kausar);


// miles to kilomitar

// function mileToKilometer(mile) {
//     const kilo = mile * 1.60934;
//     return kilo;
// }
// const kiloMitar= mileToKilometer(1);
// console.log(kiloMitar);

function mileTokilo(mile) {
    const kilo = mile * 1609.34;
    return kilo;
}
const kiloMItar = mileTokilo(10);
console.log(kiloMItar);


// function kiloMeterTomiles(kilo) {
//     const mile = kilo * 0.621371192;
//     return mile;
// }
// const meter= kiloMeterTomiles(5)
// console.log(meter);

function kiloMetarTomile(kilo) {
    const mile =  kilo * 0.621371192;
    return mile
}

const metar =kiloMetarTomile(10);
console.log(metar);

function gramToKg(kg) {
    const gram = kg * 0.001;
    return gram;
}

const kilograms = gramToKg(50);
console.log(kilograms);


function kgToGram(gram) {
    const kg = gram * 1000;
    return kg
}

const  kilogram = kgToGram(5);
console.log(kilogram);


function insToCm(centimitar) {
    const insi = centimitar * 2.54;
    return insi
}

const inch = insToCm(5);
console.log(inch);


function poundToGram(Gram) {
    const Grams = Gram * 453.592;
    return Grams;
}

const pound = poundToGram(10);
console.log(pound);

function ouncesToPounds(pound) {
    const to = pound * 0.0625;
    return to;
}

const ounces = ouncesToPounds(50);
console.log(ounces);
