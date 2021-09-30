let numbers = [
    5,
    8,
    0,
    1,
    9,
    11,
    15,
    16
];
//Noora
console.log("Original numbers list: ", numbers)

for(let i = 0 ; i < numbers.length ; i++)
{
    for(let j = i ; j < numbers.length ; j++)
    {
        if(numbers[j] < numbers[i])
        {
            let temp = numbers[j];
            numbers[j] = numbers[i]
            numbers[i] = temp;
        }
    }
}

console.log("Numbers list After sorting: ", numbers)

//OR Some change of laith function

// for(let i = 0 ; i < numbers.length ; i++)
// {
//     for(let j = 0 ; j > numbers.length ; j++)
//     {
//         if(numbers[i] > numbers[j + 1])
//         {
//             let temp = numbers[j];
//             numbers[j] = numbers[j + 1]
//             numbers[j + 1] = temp;
//         }
//     }
// }
//console.log("Numbers list After sorting: ", numbers)

//Laith
// for(let i = 0 ; i < numbers.length ; i++)
// {
//     for(let j = 0 ; j < numbers.length - 1 ; j++)
//     {
//         if(numbers[i] > numbers[j + 1])
//         {
//             let temp = numbers[j];
//             numbers[j] = numbers[j + 1]
//             numbers[j + 1] = temp;
//         }
//     }
// }

// console.log("Numbers list After sorting: ", numbers)

//Noora

for(let i = 0 ; i < numbers.length ; i++)
{
    for(let j = i ; j < numbers.length ; j++)
    {
        if(numbers[j] > numbers[i])
        {
            let temp = numbers[j];
            numbers[j] = numbers[i]
            numbers[i] = temp;
        }
    }
}

console.log("Numbers list After Desc sorting: ", numbers)


//Laith

// for(let i = 0 ; i < numbers.length ; i++)
// {
//     for(let j = 0 ; j < numbers.length - 1 ; j++)
//     {
//         if(numbers[i] < numbers[j + 1])
//         {
//             let temp = numbers[j];
//             numbers[j] = numbers[j + 1]
//             numbers[j + 1] = temp;
//         }
//     }
// }

// console.log("Numbers list After Desc sorting: ", numbers)
// making element of the Array immutable
let newarray=[...numbers];

numbers.push(545,565); // adding new vlaues to the array
console.log("immutable array ", newarray)

var fs = require('fs'); 
let txt = fs.readFileSync('data.txt', 'utf8'); // reading the content of data.txt file

let arr = Array.from(txt.split(','),Number); // converting content of data.txt file to sequence of integer numbers (Array of integers)

console.log("content of data.txt file: ", arr)

let lowestToHighest = arr.sort((a, b) => a - b); // soritng array elements in ASC order

console.log("ASC order data.txt content: ",lowestToHighest)
//storing the ASC order of the array in a new file called output.txt
fs.writeFileSync('output.txt',"ASC order : "+ lowestToHighest);