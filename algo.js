//inclussion  

const banana = "banana".includes("a") 

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

  //stringIncludes("banana", "d") 

  console.log(stringIncludes("banana", "d") )