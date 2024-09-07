function isLeapYear(year) {
    if(year % 4 === 0){
        return true;
    }else{
        return false;
    }

}
const isLeap = isLeapYear(2052);
// console.log(isLeap);

function isLeapYear(year) {
    if(year % 5 === 0){
        return true;
    }else {
        return false;
    }
}

const is = isLeapYear(2050);
const is1 = isLeapYear(2051);
const is2 = isLeapYear(2052);
const is3 = isLeapYear(2053);
const is4 = isLeapYear(2054);
console.log(is, is1, is2, is3, is4);



// those year that is not divisible by 100 and if and year is divisible by 4: then it will be a leap year.
// function isLeapYear2(year) {
//     if(year % 100 !== 0 && year % 4 === 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// const Leap = isLeapYear2(2052);
// const Leap1 = isLeapYear2(2050);
// const Leap2 = isLeapYear2(2000);
// const Leap3 = isLeapYear2(5000);
// const Leap4 = isLeapYear2(2040);
// console.log(Leap, Leap1, Leap2, Leap3, Leap4);

function isLeapYear2(year) {
    if( year % 100 !== 0 && year % 4 === 0){
        return true;
    }else{
        return false;
    }
}
const leap = isLeapYear2(2050);
const leap1 = isLeapYear2(501);
const leap2 = isLeapYear2(5002);
const leap3 = isLeapYear2(5003);
const leap4 = isLeapYear2(5004);
const leap5 = isLeapYear2(5005);
const leap6 = isLeapYear2(5006);
console.log(leap, leap1, leap2, leap3, leap4, leap5, leap6);

