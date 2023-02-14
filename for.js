// let numbers =[2,7,10,1,29,108,96,12,33,49,];
let numbers =[2,4,6,8];
var isPrime;
var max=0;

numbers.forEach(function(number){
    isPrime=true;
    // if(i<=2){
    //     max=2;
    // }

    if(number%2!=0){        
        //console.log(number);  
        for(let i=3; i<number;i+=2){
            //console.log(i);
            if(number%i===0){
                isPrime=false;
                break;
            }
            else{
                isPrime=true;                 
            }           
        }      
        
        if(isPrime===true){
            if(number>max){
                max=number;
               
            }
        }
        
    }
    //console.log(`${number} ${isPrime}`);
    console.log(`'${number} not prime`)
});
console.log(max);