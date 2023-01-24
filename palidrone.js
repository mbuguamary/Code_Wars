// function reverseString(word){
//    return  word.split('').reverse().join()
// }
// function  isPalindrome(word){
//  const reverseWord = reverseString(word)
//  return word === reverseWord
// }
// console.log(isPalindrome('mum'))

function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
}