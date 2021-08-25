
// initialize 

let a = [5, 3, 4, 2, 1]; 
// index 0  1  2

console.log(a)  //  [5, 3, 4, 2, 1]; 

// print the legnth 
console.log(a.length) // the length is 5

// Access element 
console.log(a[1]) // 3

//iterate all elements

for(let i = 0; i < a.length; i++){
    console.log(a[i])
} 

//modify elements 

a[0] = "banana" 
console.log(a) 

//sort 
let sorted = a.sort() 
console.log(sorted)