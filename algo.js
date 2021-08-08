//inclussion  

const banana = "banana".includes("a")  

//console.log(banana)

//console.log(banana) //true 



function stringIncludes(word, letter){
    let matches; // 1
    for(let i = 0; i < word.length; i++){ //2
        if(word[i] === letter){ //3
            matches = true //4
        }
    }
    return !!matches // 5
  }

//console.log(stringIncludes("banana", "d") )  



// ---------------------

function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    return total;
  }

//console.log(addUpTo(100))  

// Binary Search 


//let letters = "letters"  

//console.log(letters.split('') ) // returns array of letters 

//console.log(letters.split().sort() ) //returns array of letters that is sorted  

//console.log(letters.split().sort().join('') ) //returns sorted string  

function sortString(string){ 
  return string.split('').sort().join('')

} 

//console.log(sortString('banana')) // => aaabnn

 

// recursive function 

// function sayDownFrom(n){ 
//   console.log(n) 
//   if(n > 1){
//     sayDownFrom(n -1)
//   } else{
//      return true
//   }
// } 

// sayDownFrom(5) 

// function sumUpToFive(){
// 	return (1 + 2 + 3 + 4 + 5)
// }  

// function sumUpToFive(){
// 	return (1 + 2 + 3 + 4) + 5
// }   

// ----



function sumUpToFive(){
	sumUpToFour + 1
}

function sumUpToFour(){
	1 + 2 + 3 + 4
}
//console.log(sumUpToFour())


console.log(sumUpToFive())