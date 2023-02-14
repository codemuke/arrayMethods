/* 
Key Lessons from Hari: this is not school or college, try on your own
Focus on Logic and Applying the same in Problems
Run in the Editor, Get hands on Code, produce error and repeat
// 1. map
let arr = [1,2,3,4,5,6,7];
let mappedArray = arr.map(x=>x*2);
console.log(mappedArray);

// 2.Filter

let FilArr = [2,4,6,8,10];
let afterFilter = FilArr.filter(x => x > 6 );
console.log(afterFilter);


// 3. sort() 
//ascending or descending 

const num = [6,7,8,3,2,5,1];
const alphabet = ['a', 'v', 's','d','f','e','x'];
//Number sort
// console.log(num);
// let sortedNum = num.sort();  // default sort is in asending order
// console.log(num);

const numDescend = num.sort((a,b) => a>b ? -1 : 1);
const alphabetDescend= alphabet.sort((a,b) => a>b ? -1 : 1);
//https://forum.freecodecamp.org/t/arr-sort-a-b-a-b-explanation/167677/2 
console.log(numDescend);
console.log(alphabetDescend);
// string sort


// forEach
const arr1 = [1,2,3,4,5,6,7,8];
const newArr1 = arr1.forEach(function(value, index) {
    console.log(value, index);
});

//concat()

const arr1 = ["a", "b", "c"];
const arr2 = ["d", "e", "f"];
console.log(arr1.concat(arr2));

//every() 
//This method checks every element in the array that passes the condition, 
//returning true or false as appropriate.

const arr2 = [1,2,3,4,5,6,7,8];
const arr3 = arr2.every(x=> x>5);
console.log(arr3);

*/


