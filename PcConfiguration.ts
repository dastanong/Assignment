import { question } from 'readline-sync'

function printAllOpts(array) {
  let i = 0
  while (i < 3) {
    console.log(i + " - " + array[i])
    i++
  }
  /*
  for (let i = 0; i < array.length; i++) {
    const allOpts = array[i];
    console.log(i + " - " + allOpts)
  }
  */
}

function getPrice(option) {
  return parseInt(option.slice('RM')[1])
}

console.log("Choose your resolution")
const allReso = ['1920 x 1080 : RM200', '2560 x 1440 : RM400', '3280 x 1680 : RM600']
printAllOpts(allReso)
let chosenReso = question('Select the resolution\n')

console.log("Choose graphic card")
const allGrpCrd = ['nVdia : RM3000', 'Intel : RM2000', 'AMD : RM1000']
printAllOpts(allGrpCrd)
let chosenGrpCrd = question('Select the Grahpic Card\n')

console.log("Choose hard drive size")
const allHDS = ['500GB : RM300', '1TB : RM600', '2TB : RM900']
printAllOpts(allHDS)
let chosenHDS = question('Select the Hard Disk Size\n')

console.log("Below are the options you had selected : ")
const allChosenOpts = [
  //allReso[chosenReso],
  //allGrpCrd[chosenGrpCrd],
  //allHDS[chosenHDS],
  getPrice(allReso[chosenReso]),
  getPrice(allGrpCrd[chosenGrpCrd]),
  getPrice(allHDS[chosenHDS]),
]
console.log(allChosenOpts)

