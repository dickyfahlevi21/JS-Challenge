// #1 Palindrome
const palindrome = words => {
    words = words.split(' ').join('').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").toLowerCase();
    const originalWord = JSON.stringify(words.split(''))
    const reverseWord = JSON.stringify(words.split('').reverse())

    return originalWord === reverseWord ? true : false;

}
console.log(palindrome("ibu ratna antar ubi")) // output true
console.log(palindrome("kasur ini rusak")) // output true
console.log(palindrome("A nut for a jar of tuna.")) // output true
console.log(palindrome("Borrow or rob?")) // output true
console.log(palindrome("Was it a car or a cat I saw?")) // output true
console.log(palindrome("Yo, banana boy!")) // output true
console.log(palindrome("UFO tofu?")) // output true