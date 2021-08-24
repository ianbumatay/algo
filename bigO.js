 
// for loop basics 

for( let i = 0; i < 5; i++){ // initial expression, condition, iterate expression
    console.log("print the string five times", i)
} 

// set initial variable => let i = 0 
// if condition is true => i < 5
// iterate add 1 => 1++ 




// function addUpto(n){
//     let total = 0;
//     for(let i = 1; i <= n; i++){ 
//         total += i;
//     } 
//     return total;
// }  


function addUpto(n){
   return n * (n + 1) / 2      // 6 + 1 = 7 , 7 * 6 = 42, 42/ 2 = 21
}

console.log(addUpto(6)) 

// both solution returns 21