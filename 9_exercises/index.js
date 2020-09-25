
// Draw a pyramid to console:
// *
// **
// ***
// ****
// *****
console.log("Draw a pyramid:");

let pyramidRow = "";
let pyramidSize = 5;
for (let currentRow = 0; currentRow < pyramidSize; currentRow++) {
    pyramidRow += "*"; // or pyramidRow = pyramidRow + "*";
    console.log(pyramidRow);
}


// BONUS: Count down from 10 to 0 and output it on console.
console.log("Counting down from 10 to 0");

for (let i = 10; i >= 0; i--) {
    console.log(i);
}

// Print all even numbers from 0 to 100
console.log("Printing even numbers from 0 to 100");

for (let j = 0; j <= 100; j++) {
    if (j % 2 === 0) {
        console.log(j);
    }
}

// FizzBuzz:
// Print numbers from 1-100
// Don't print the number if: 
//   if the number is a multiple of 3 (and not 5), print Fizz
//   if the number is a multiple of 5 (and not 3), print Buzz
//   if the number is a multiple of both 3 and 5, print FizzBuzz
// Example output:
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz

// An implementation that I like
function fizzBuzz() {
    console.log("FizzBuzz version 1");
    for (let i = 1; i <= 100; i++) {
        let valueToPrint = "";
        if (i % 3 === 0) {
            valueToPrint += "Fizz";
        }
        if (i % 5 === 0) {
            valueToPrint += "Buzz";
        }

        if (valueToPrint === "") {
            valueToPrint = i;
        }
        console.log(valueToPrint);
    }
}
fizzBuzz();

// A version without string concatenation
function fizzBuzz2() {
    console.log("FizzBuzz version 2");
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            if (i % 5 === 0) {
                console.log("FizzBuzz");
            } else {
                console.log("Fizz");
            }
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz2();

// Similar to version 2 but flatter if/else structure
function fizzBuzz3() {
    console.log("FizzBuzz version 3");
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz3();