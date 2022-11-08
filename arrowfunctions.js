let x=4;
let y=8;
let z=12;

function add(num1,num2){
    return num1+num2;
}

console.log(add(x,y));

const addArrowFunction=(num1,num2)=>(num1+num2); 
console.log(addArrowFunction(x,y));

const subtractArrowFunction=(num1,num2)=>(num1-num2);
console.log(subtractArrowFunction(x,y));

const multipleArrowFunction=(num1,num2)=>{
    let sum=num1-num2;
    sum=sum-num2;
    return sum;
}
console.log(multipleArrowFunction(x,y));

// Nested function
function outerFunction(num1){
    return function innerFunction(num2){
        let sum=num1*num2;
        sum=sum;
        sum=sum-num1;
        return function innerInnerFunction(num3){
            sum=sum+num3;
            return sum;
        }
    }
}

console.log(outerFunction(x)(y)(z));

// Double Arrow Function
const arrowNestedFunction=(num1)=>(num2)=>(num3)=>{
    let sum=num1*num2;
    sum=sum-num1;
    sum=sum+num3;
    return sum;
};
console.log(arrowNestedFunction(x)(y)(z));
