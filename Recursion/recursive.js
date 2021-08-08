// recurcive algo 

function countDownFrom(n){ 
    console.log(n) 
    if(n > 1){
        countDownFrom(n -1)
    } else{
        return true
    }

} 

countDownFrom(5) 