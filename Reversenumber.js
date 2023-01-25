
 const revesenumber = (n) =>{
     n = n+""
  let newnumber= parseInt(n.split("").sort().reverse().join(""));
  let newnumber1= parseInt(n.split("").sort().join(""));
   //    let sum = 0;
   //    if(newnumber>n){
   // return sum = newnumber-n
   //   }else{
   //  return sum = n-newnumber
   //  }ret
return newnumber-newnumber1;

 }
 console.log(revesenumber(284))
 //console.log(revesenumber(newnumber))


// function reverse_a_number(n)
// {
// 	n = n + "";
// 	return n.split("").reverse().join("");
// }
// console.log(Number(reverse_a_number(32243)));