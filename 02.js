// #2 Combine several arrays
const first = ['Behind', 'every', 'great', 'man']
const second = ['is', 'a', 'woman']
const third = ['rolling', 'her', 'eyes']

const concatArray = first.concat(second, third)
const joinWords = concatArray.join(' ')
console.log(joinWords)