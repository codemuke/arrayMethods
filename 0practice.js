/*
3.Write a JavaScript function to filter false, null, 0 and blank values from an array. Go to the editor
Test Data :
console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
Expected Output: [58, "abcd", true]
*/
let a = [];
function filter_array_values(arr){
    
    arr.filter(function(x){    
        //thanks to Hari anna
        //Why you put x > 0 to eliminate instead you could have tried x!==0
        if(x !== 0 && x!==null ){
            if(x !=="" && x!==false){
                a.push(x);
                console.log(a);
            }
        }
     
    })
}
//console.log(a);

filter_array_values([58, '', 'abcd', true, null, false, 0]);
