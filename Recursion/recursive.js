// Recursive Functions => function that call itself

function countDownFrom(n){ 
    console.log(n) 
    if(n > 1){
        countDownFrom(n -1) // recursive call 
    } else{ 
        console.log("boom done")
        return true // Base case 
    }

} 


function sumUpTo(n){
    console.log(n) 
    if(n > 1){
        sumUpTo(n - 1) + n 
    } else{
        return 1
    }

} 

//sumUpTo(5) 


// working with string 

function printString(myString){

    console.log(myString[0]) 

    if(myString.length > 1){
        let mySubstring = myString.substring(1, myString.length) 
        printString(mySubstring)
    }else{ 
        return true 
    }
} 

printString('pizza') 
