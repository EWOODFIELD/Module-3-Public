// Module 3 Lab JS Fundamentals
// Question 2
console.log("Ethan" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log(" -9 " + 5);
console.log(" -9 " - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log(" \t \n" - 2);

// Question 3
let a=("First number?", 1);
let b=("Second number?", 2);
console.log((a + b));

// Question 4
console.log(5 > 4);
console.log("apple" > "pineapple");
console.log("2" > "12");
console.log(undefined == null);
console.log(undefined === null);
console.log(null == "\n0\n");
console.log(null === +"\n0\n");

// Question 5
if ("0") {
    console.log( 'Hello' ); // Alert is undefined, changed to console.log
}

// Question 6
// Original code - The conditional (?) operator is used as an alternative to if/else statements
    // let result;
    // if (a + b < 4) {
    // result = 'Below';
    // } else {
    // result = 'Over';
    // }
// New code 
function checkNumber(a,b){
    return(a+b<4 ? "Below": "Above");
}
console.log(checkNumber(1,2));

// Question 7
// const hello = ( who )=> console.log(‘Hello ’ + who );
// (const delayHello = delay(hello, 300);)
// delayHello(‘world’);

// Question 8
console.log("Question 8")
let schedule = {}; // An empty object (the main way of declaring an empty object)
console.log((isEmpty(schedule))); // true
schedule["8:30"] = "get up";
console.log((isEmpty(schedule))); // false

function isEmpty(schedule){// How to check if objects are empty?
    if(Object.keys(schedule).length===0){
        return(true);
    } else {
        return(false);
    }
}

// FOR Loop Solution Version
// function isEmpty(schedule) {
//     for (let key in schedule) {
//     // if the loop has started, there is a property
//         return false;
//         }
//     return true;
// }

// Question 9: Chaining
let ladder = {
    numOfCalls: 0,
    step: 0,
    up() {
    this.step++;
    this.numOfCalls++
    return this;
    },
    down() {
    this.step--;
    this.numOfCalls++;
    return this;
    },
    showStep: function() {
    console.log( this.step );
    return this;
    }
};
console.log(ladder.up().up().up().showStep());

// Question 10: Construction Functions
function Accumulator(startingValue) {
    this.value = startingValue;
    // this.sumValue;
    this.read = function(newValue) {
        this.value += newValue;
    };
    this.add = function(num1, num2){
        this.sumValue = num1 + num2
    }
}

let accumulator= new Accumulator(1);

accumulator.read(3); //as soon as you do this, it adds 

console.log(accumulator.value);

accumulator.add(2,3);

console.log(accumulator.sumValue)





    
