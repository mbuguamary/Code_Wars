 function count(string){
    const obj = {}
    const charsArray = string.split('')
    if(!charsArray.length){
        return{}
    }

    for(let i= 0; i < charsArray.length; i++){
     if(charsArray[i] in obj){
        obj[charsArray[i]]++
     }else{
        obj[charsArray[i]]=1
     }
     }
     return obj
}
 console.log (count('abca','44e'))
 console.log (count(''))
