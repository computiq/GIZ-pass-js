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