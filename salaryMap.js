let employee = [
    {
        "name" : "A",
        "experience" : 4,
        "salary" : 0
    },
    {
        "name" : "B",
        "experience" : 10,
        "salary" : 0
    },
    {
        "name" : "C",
        "experience" : 5,
        "salary" : 0
    },
    {
        "name" : "D",
        "experience" : 1,
        "salary" : 0
    },
    {
        "name" : "E",
        "experience" : 0.5,
        "salary" : 0
    },
    {
        "name" : "F",
        "experience" : 12,
        "salary" : 0
    },
    {
        "name" : "G",
        "experience" : 8,
        "salary" : 0
    },
    {
        "name" : "H",
        "experience" : 3,
        "salary" : 0
    },
    {
        "name" : "I",
        "experience" : 5,
        "salary" : 0
    },
    {
        "name" : "J",
        "experience" : 5,
        "salary" : 0
    },    
];
let employeeSalary = {
    "5" : 25000,
    "3" : 23000,
    "8" : 30000,
    "0.5" : 10000,
    "10" : 50000,
    "12" : 60000,
    "1" : 12000,
    "4" : 20000
};
// use only map, forEach 
// 1.create new array and update the salary
// 2.total amount salary expense
// 3. salary average, find whose salary is nearer to salary average

// let employeePay= employee.map(function(x){
//     return x;
// })
let employeePay= employee;

for(const years in employeeSalary){
    employeePay.forEach(function(x){
        if(x.experience === Number(years)){
            x.salary = employeeSalary[years];
        }
    });
}

console.log(employeePay);
let totalSalExpense=0;
employeePay.forEach(function(x){
    totalSalExpense += x.salary;
});

console.log(` totalSalExpense cost for month ${totalSalExpense}`);

let salAvg = totalSalExpense/employeePay.length;
console.log(`salAvg ${salAvg}`);
let minSalDetails=[];
let min=100000;
let minSalObject;
employeePay.forEach(function(x, index){

    let DIFFERENCE = Math.abs(x.salary-salAvg);
    if(DIFFERENCE < min){
        min = DIFFERENCE;
        minSalObject= x;
    }    
});

console.log(minSalObject);