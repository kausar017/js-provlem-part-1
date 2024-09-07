/**
 *function takes an array as parameter
 give me the average of the odd numbers in the array 
 */

//  function addAverage(numbars){
//         const odds = [];
//         for(const numbar of numbars){
//             if(numbar % 2 === 1) {
//                 // console.log(numbar);
//                odds.push(numbar)
//             }

//         }
//         // odds is the array that contains only the odd numbers
//         // console.log(odds);
//         let sum = 0;
//         for(const numbar of odds){
//             sum = sum + numbar;
//         }
//         const count = odds.length;
//         console.log(sum, count);
//         const avg = sum / count;
//         return avg;
//  }
//  const numbars = [41, 42, 43, 44, 45, 46, 47];
//  const avg = addAverage(numbars);
//  console.log('average of the add numbers is:', avg);
function oddavarage(numbars) {
    const odds = [];
    for(const numbar of numbars){
        if(numbar % 2 === 1) {
           // console.log(numbar);
            odds.push(numbar);
        }
        
    }
    //console.log(odds);
    let sum = 0;
    for(const numbar of odds) {
        sum = sum + numbar;
    }
    const count = odds.length;
    console.log(sum, count);
    const avg = sum / count;
    return avg
}
const numbars = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
const avg = oddavarage(numbars);
console.log('avareg of the odd numbar is', avg);
