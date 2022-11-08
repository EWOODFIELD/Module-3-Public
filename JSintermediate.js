// Question 1
let string = "";

function ucFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(ucFirst("ethan"));

// Question 2
let string2 = "What I'd like to tell on this topic is what to do when";
let maxChars = 20;

function truncate(string2, maxChars) {
  if (string2.length > maxChars) {
    return string2.slice(0, maxChars) + "...";
  } else {
    console.log(string2);
  }
}
console.log(truncate(string2, maxChars));

// Question 3
let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");
console.log(styles);

styles[1] = "Classics";
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles);

console.log(styles.shift());

styles.unshift("Rap", "Reggae");
console.log(styles);

// Question 4
function camelize(str) {
  return (
    str
      .split("-") // Splits the text at each dash, and turns the words into an array
      .map((word, index) =>
        index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      ) // The map method indexes the "array" starting at position zero, and converts the words after [0] to uppercase
      //by slicing the first letter of each word?
      .join("") // Converts the array of words back into a text string (you can put a bunch of different symbols between the '' if you want e.g. '//')
  );
}
console.log(camelize("list-style-image"));

// Question 5
function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);


// Question 6
let arr = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

function unique(arr) {
  return Array.from(new Set(arr));
}

console.log(unique(arr));

// For Of Loop Method Q6
let strings = ["Hare","Krishna","Hare","Krishna","Krishna", "Krishna","Hare","Hare",":-O",];

function unique(strings) {
  let resultArray = [];
  for (let element of strings) {
    if (!resultArray.includes(element)){ // ! means not/doesn't 
        resultArray.push(element);
    }
  }
  return resultArray;
}

console.log((unique(strings)));

// Question 7: Iterable Keys
let map = new Map(); // Creates a new map
map.set("name", "John"); // Assigns values into the map

let keys = Array.from(map.keys()); //

keys.push("more"); //Note: Push won't work unless you create the array in line 110
console.log(keys);

// Question 8: Storing "Unread" Flags
let messages = [
  { text: "Hello", from: "John" }, // Creates a new array with text/name object pairs in it
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let readMessages = new WeakSet(); //???
readMessages.add(messages[0]); //Marks the "hello" and "how goes" messages as "read" status?
readMessages.add(messages[1]);
console.log("Read message 0:" + readMessages.has(messages[0])); //Display which messages we have marked as "read" status
messages.shift(); //Remove the first "read" message?
console.log(messages);

// Question 9
let salaries = { //This is an object, not an array. Object have key:value pairs
  John: 100,
  Pete: 300,
  Mary: 250,
};

let sum = 0; //Define a variable and a starting point of zero for the sum of salaries
function sumSalaries(salaries) {
  for (let salary of Object.values(salaries)) {
    //Values accesses the salary numbers, but not the names (using entries would access the keys and the values, using keys accesses the names only)
     //return sum plus each salary figure
     sum += salary;
  }
  return (sum);
}

console.log(sumSalaries(salaries)); //display total salaries sum

// Question 10
let salaries2 = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

let maxSalary = 0; //Define a variable and a starting point of zero for the highest salary
let maxName = null; //Create a variable for the highest salary earners name and leave it blank (i.e. null)

function topSalary(salaries) {
  for ([name, salary] of Object.entries(salaries)) { //Need [name, value] when using object.entries or it won't work
    //???
    if (maxSalary < salary) {
      //Check each salary against the maxSalary variable
      maxSalary = salary; //If any salary is higher than maxSalary, it becomes maxSalary
      maxName = name; //The maxName becomes the name associated with the highest salary
    }
  }
  return maxName; //Return the highest earners name
}

console.log(topSalary(salaries));

// Question 11
function getSecondsToday() {
  let present = new Date();
  let today = new Date(
    present.getFullYear(),
    present.getMonth(),
    present.getDate()
  );
  let difference = present - today;
  return Math.round(difference / 1000);
}
console.log(getSecondsToday());

// Question 12
// In simple cases of circular references, we can exclude an
// offending property from serialization by its name.
// But sometimes we can’t just use the name, as it may be
// used both in circular references and normal properties.
// So we can check the property by its value.
// Write replacer function to stringify everything, but
// remove properties that reference meetup:

let room = {
  number: 23,
};
let meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room,
};

// circular references

room.occupiedBy = meetup;
meetup.self = meetup;
alert(
  JSON.stringify(meetup, function replacer(key, value) {
    /* your code */
  })
);

/* result should be:
{
"title":"Conference",
"occupiedBy":[{"name":"John"},{"name":"Alice"}],
"place":{"number":23}
}
*/

//Question 13
// Write a function called vowelCount which accepts a string and returns
//a map where the keys are numbers and the values are the count of
//the vowels in the string.
// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }

let vowelString="Ethan";
