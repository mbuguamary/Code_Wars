let numStr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumEvens = (numStr) => {
  let sum = 0;
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] % 2 === 0 && numStr[i]>sum) {
    // sum = sum + numStr[i];
      sum=numStr[i]
    }
  }
  return sum;
}
 
console.log(sumEvens(numStr));