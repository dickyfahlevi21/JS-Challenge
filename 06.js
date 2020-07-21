// #6 Censoring Words
const censor = "*"
const censoringWords = ['dolor', 'elit', 'quis', 'nisi', 'fugiat', 'proident', 'laborum']
const paragraph = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
const checkingCensor = (paragraph) => paragraph.split(' ').reduce((acc, word) =>
    acc + ' ' + (censoringWords.includes(word) ? censor.repeat(word.length) : word), '')

const censored = checkingCensor(paragraph).trim()
console.log(censored)