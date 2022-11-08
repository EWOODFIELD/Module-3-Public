// Question 1
function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();
  
  console.log((counter())); // 0
  console.log((counter())); // 1
  
  console.log((counter2())); // 0
  console.log((counter2())); // 1
//   The answer: 0,1.
// Functions counter and counter2 are created by different invocations of makeCounter 
//so they have independent outer Lexical Environments, each one has its own count.

// Question 2 ???
function makeCounter() {
    let count2 = 0;
  
    function counter(){
      return count2++;
    }
    counter.set = value => count2=value; // Arrow functions (making methods for functions as if they existed within the "function counter()". Value is passed in as the parameter)
    counter.decrease =() => count2--;
    return counter;
};

let myCounter = makeCounter()
myCounter.set(6)
myCounter.decrease()
console.log(counter());

// Question 3
// Using Set Interval
function printNumbers(from, to) {
    let current = from; // Set current value equal to "from" parameter
    let timerId = setInterval(function() { // The setInterval will call the "function()" every second until the "from" number is equal to the "to" number
      console.log((current));
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }
  
  // usage:
  printNumbers(5, 10);

// Using Set Timeout
function printNumbers(from, to) {
  let current = from;

  setTimeout(function go() {
    console.log((current));
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}

// usage:
printNumbers(5, 10);

// Question 4
// let f = _.debounce(alert, 1000);
// f("a");
// setTimeout(() => f("b"), 200);
// setTimeout(() => f("c"), 500);

// Question 5
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = { //   User object with a login function contained inside
    name: 'John',
    login(result) {
      console.log((this.name + (result ? ' logged in' : ' failed to log in')));
    }
  };
  
  askPassword(() => user.login(true), () => user.login(false)); //   Now it gets user from outer variables and runs it the normal way.

// Question 6
let head = {
    glasses: 1
};
    let table = {
    pen: 3,
    __proto__: head // Head becomes the parent object of table, and table gets access to the value of "glasses: 1"
};
    let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table // Table becomes the parent object of bed, and bed gets access to the values of "pen: 3" and "glasses: 1"
};
    let pockets = {
    money: 2000,
    __proto__: bed // Bed becomes the parent object of pockets, and pockets gets access to the values of "pen: 3", "glasses: 1", "sheet: 1", "pillow: 2"
};

console.log((pockets.pen)); // 3
console.log((bed.glasses)); // 1
console.log((table.money)); // undefined because table doesn't have access to the "money" property within pockets

// Question 8
Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
      setTimeout(() => f.apply(this, args), ms);
    }
};
  
  let user2 = {
    name: "John",
    sayHi() {
      console.log((this.name));
    }
}
  
  user.sayHi = user.sayHi.defer(1000);
  
  user.sayHi();

// Question 9
let dictionary = Object.create(null);
// your code to add dictionary.toString method
// add some data
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// only apple and __proto__ are in the loop
for(let key in dictionary) {
  console.log((key)); // "apple", then "__proto__"
}
// your toString in action
console.log((dictionary)); // "apple,__proto__"

// Question 10
class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }

  class ExtendedClock extends Clock {
    constructor(options) {
      super(options);
      let { precision = 1000 } = options;
      this.precision = precision;
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), this.precision);
    }
  };

  // Question 11
  let err = new FormatError("formatting error");
  console.log(( err.message )); // formatting error
  console.log(( err.name )); // FormatError
  console.log(( err.stack )); // stack
  console.log(( err instanceof FormatError )); // true
  console.log(( err instanceof SyntaxError )); // true (because inherits from SyntaxError)

  class FormatError extends SyntaxError {
    constructor(message) {
      super(message);
      this.name = this.constructor.name;
    }
  }
  
  let err2 = new FormatError("formatting error");
  console.log(( err.message )); // formatting error
  console.log(( err.name )); // FormatError
  console.log(( err.stack )); // stack
  console.log(( err instanceof SyntaxError )); // true

  // Question 12
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  delay(3000).then(() => console.log(('runs after 3 seconds')));

// Question 13
  async function loadJson(url) { // (1)
    let response = await fetch(url); // (2)
  
    if (response.status == 200) {
      let json = await response.json(); // (3)
      return json;
    }
    throw new Error(response.status);
  }
  
  loadJson('https://javascript.info/no-such-user.json')
    .catch(console.log()); // Error: 404 (4)