const numbers = [5, 8, 0, 1, 9, 11, 15, 16];

let mutableArr = numbers; 

console.log("Original numbers list: ", mutableArr);

//This function recieve an array of numbers and return the result by asc order 
function asc(nums){
    for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length; j++) {
			if (nums[j] > nums[j + 1]) {
				let temp = nums[j];
				nums[j] = nums[j + 1];
				nums[j + 1] = temp;
			}
		}
	}
    return nums;
}

//This function recieve an array of numbers and return the result by desc order 
function desc(nums){
    for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length; j++) {
			if (nums[j] < nums[j + 1]) {
				let temp = nums[j];
				nums[j] = nums[j + 1];
				nums[j + 1] = temp;
			}
		}
	}
    return nums;
}

console.log("--------------\nThe numbers after Asc sorting: ", asc(mutableArr)); //Printing the result after applying asc order

console.log("--------------\nThe numbers after Desc sorting: ", desc(mutableArr)); //Printing the result after applying desc order


let fs = require('fs'); 
let data = fs.readFileSync('data.txt', 'utf8'); // Reading the file data.txt
var arrayNum = JSON.parse("["+data+"]"); // Parsing the text into array of numbers
fs.writeFileSync("output.txt", "After aplying asc sorting: [ "+ asc(arrayNum) +" ]"); //Writing the result of asc order on new file call output.txt



