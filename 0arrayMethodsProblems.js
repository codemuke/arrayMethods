/*
1.Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array
Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
*/
let sampleArr = [NaN, 0, 15, false, -22, '', undefined, 47, null];

let ans = sampleArr.filter(x => x > 0 || x < 0);
console.log(ans);

/* 
2.Write a JavaScript function to find an array contains a specific element. Go to the editor
Test data :arr = [2, 5, 9, 6];
console.log(contains(arr, 5));
Expected Output:[True]
*/
// include() Method
const arr = [2, 5, 9, 6];
function contains(array, x){
    return array.includes(x);
}
console.log(contains(arr, 5));

/*
3.Write a JavaScript function to filter false, null, 0 and blank values from an array. Go to the editor
Test Data :
console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
Expected Output: [58, "abcd", true]
*/

function filter_array_values(arr){
    arr.filter(function(x){
        if(x > 0 && x!==null ){
            if(x !=="" && x!==false){
                return console.log(x);
            }
        }
    })
}
filter_array_values([58, '', 'abcd', true, null, false, 0]);

/* 
4.Write a JavaScript program to get all the indexes where NaN is found of a given array of numbers.
[2, NaN, 8, 16, 32],[2, 4, NaN, 16, 32, NaN],[2, 4, 16, 32]
*/
const ARR1 = [2, NaN, 8, 16, 32];
const ARR2 = [2, 4, NaN, 16, 32, NaN];
const ARR3 = [2, 4, 16, 32];

function NaNindex(array){
    console.log(array);
    array.forEach((element, index) => {
    //console.log('Element '+element);
    if(isNaN(element)) {
        console.log('in IF');
        return console.log('NaN index '+ index);
    }
    // else{
    //     console.log('No NaN element in the array')
    // }
    });
}

NaNindex(ARR1);
NaNindex(ARR2);
NaNindex(ARR3);
