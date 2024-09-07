/***
 *array has soe duplicate elements 
 * 
 */ 

 const biranikhur = ['jamal', 'kamal', 'rofiq', 'jabbar', 'jamal', 'rofiq', 'jabbar', 'kamal'];
 const numbars = [1, 2, 3, 4, 3, 2, 1, 9, 8, 9, 7, 8, 5, 7, 5 ];

 function noDuplicat(array) {
    const unique = [];
    for(const item of array) {
        if(unique.includes(item) ===false){
            unique.push(item)
        }
    }
    return unique;
 }
 const uniqArray = noDuplicat(biranikhur);
 const uniqArray2 = noDuplicat(numbars);
 console.log(uniqArray, uniqArray2);
 