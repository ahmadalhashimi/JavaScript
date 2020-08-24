function isPalindrome(str){
    var word = str;
    var newWord = word.split(' ').join('').toLowerCase()
    for( var i=0; i< newWord.length/2; i++){
    if(newWord[i] !== newWord[newWord.length-1-i]){
        return false
        }
    }
    return true;
}
console.log(isPalindrome("Hello Word"))
console.log(isPalindrome("Hello olleH"))
