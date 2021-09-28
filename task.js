
// * Noaman Monther Mahmood
// * Full-Stack Development Bootcamp  (Tasks - 1)
// * JS Side 
// * Use Better Comments {for better experiance with this task solution}
// * https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments

 




var bs = require('./helper')
var fileGeneator = require('./generateFile')
// * Solving for TODO 3 by macking this list immutable
const numbers = [
    5,
    8,
    0,
    1,
    9,
    11,
    15,
    16
];
// * take a mutable copy of numbers array and dealing with it
let mutableNumbers = numbers
// * Solving for TODO 2 ,the code now is well-designed and well-styled
console.log("Original numbers list: ")
console.log(mutableNumbers)
console.log('-----------------------------------')
console.log("numbers list After Desc sorting: ")
// * Solving for TODO 1 , after figuring the issu in sorting algorithim and 
// * and applying TODO 2 for well-designed and well-styled code 
bs.bubbleSort(mutableNumbers, true)
console.log('-----------------------------------')
console.log("numbers listAfter ASDC sorting: ")
// ! reading a file and sort its elements in ASC order 

bs.bubbleSort(mutableNumbers,false)
fileGeneator.dealingWithFile('data.txt')
// fileGeneator.dealingWithFile(1)

