<script>
let numbers = [10,10,31,19,18,21,55,23,20,10,10,78,80,99,15];


console.log('Original numbers list: ', numbers);

for(let i = 0 ; i < numbers.length ; i++)
{
    for(let j = 0 ; j < numbers.length - 1 ; j++)
    {
        if(numbers[i] > numbers[j + 1])
        {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}

console.log('Numbers list After sorting:', numbers);

for(let i = 0 ; i < numbers.length ; i++)
{
    for(let j = 0 ; j < numbers.length - 1 ; j++)
    {
        if(numbers[i] < numbers[j + 1])
        {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}

console.log('Numbers list After Desc sorting: ', numbers);

</script>
