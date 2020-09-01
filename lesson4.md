<!-- .slide: id="lesson4" -->

# Basic Frontend - Spring 2020

Lesson 4, Tuesday, 2020-09-01


---



---


<!-- .slide: id="lesson3:if" -->
# Conditional Statements


---


### Conditional Statements

Up until now, we wrote code line by line.

But what if I want to run some code only if the user is logged in?


---


### If statement

```js
if (condition) {
  // block of code that
  // will run ONLY if
  // condition is true
}
```


---


### If statements

```js
if (condition) {
  // your code here
}
```

* `condition` must be a boolean
* The code in the block is __only__ executed if the boolean is `true`
* If the boolean is false, the code block is _not_ executed


---


### if Statements - Examples

```js
if (food === 'pizza') {
  console.log('My favorite!');
}
```

```js
if (money < 1000000) {
  console.log('You are not rich :p');
}
```

```js
if (canSpeakRussian) { // same as: canSpeakRussian === true
  console.log('Привет!');
}
```


---


### Code Blocks: {}

Code blocks contain the code between `{` and `}`, and should be indented for better readability:

```js
if (language === "German") {
  // In VSCode, you can indent code by pressing the "Tab" key,
  // or right-click and choose "Format Document"
  console.log("Guten Tag!");
}
```


---


### Code Blocks: {}

All variables created in code blocks will disappear after closing the block (technical term: “block scope”)

```js
let name = "John Doe";

if (name === "John Doe") {
  let greeting = "Hi dude";
}
if (name === "Mary Doyle") {
  let greeting = "Hello my dear";
}

console.log(greeting); // ERROR!!!!
```


---


### Code Blocks: {}

Correct solution:

```js
let name = "John Doe";

let greeting;
if (name === "John Doe") {
  greeting = "Hi dude";
}
if (name === "Mary Doyle") {
  greeting = "Hello my dear";
}

console.log(greeting); // "Hi dude"
```


---


### Quiz

What does it print?

```js
let food = "broccoli";

if (food === "pizza") {
    console.log("yum yum");
}
```


---


### Quiz

What does it print?

```js
let age = 42;

if (age >= 18) {
    console.log("you are allowed to drive a car");
}
```


---




### If...Else



```js
if (condition) {
  // some code
  // will execute if condition is true
} else {
  // other code
  // will execute if condition is false
}
```


---


### If...Else example

```js
if (temperature > 25) {
  console.log("Go swimming");
} else {
  console.log("Go biking");
}
```


---


### More on the quiz

Lets go back to our code and use `if else`.


---


### If...Else-If...Else example

```js
if (day === 'Saturday') {
  console.log('Do all the shopping.');
} else if (day === 'Sunday') {
  console.log('Relax!');
} else {
  console.log('Wake up and go to work!');
}
```


---


### Exercise

<!-- .slide: style="font-size:80%" -->

* Make three if statements
  * Make a "Good day" greeting if the hour is less than 18
  * Make a statement that only says “Hello” to someone with your name.
  * Make a statement that prints "I am younger" if your age is less than your neighbor's
* Describe the weather based on the temperature:
  * Above 30
  * Above 20
  * Above 5
  * Everything else


---


### Is this correct?

```js
let temperature = 7;

if (temperature > 20) {
  console.log("it's warm");
} else if (temperature > 30) {
  console.log("too hot!!!");
} else if (temperature > 5) {
  console.log("perfect.");
} else {
  console.log("it's a bit chilly.")
}
```

Try with a temperature of 35, what does it print? <!-- .element: class="fragment" -->


---


### Correct solution

```js
let temperature = 35;

if (temperature > 30) {
  console.log("too hot!!!");
} else if (temperature > 20) {
  console.log("it's warm");
} else if (temperature > 5) {
  console.log("perfect.");
} else {
  console.log("it's a bit chilly.")
}
```


---


### Let's code!

Harald invented a game where the player with the highest value of his height (in cm) plus five times his age wins

1. Create variables for the heights and ages for you and a person next to you
1. Calculate the score
1. Decide who wins, print the winner and their score to the console. Remember: there can be a draw (both players with the same score).


---


```js
let myAge = 42;
let myHeight = 160;
let player1Age = 35;
let player1Height = 174;
let myScore = myHeight + (5 * myAge);
let player1Score = player1Age + (5 * player1Height);
if (myScore > player1Score) {
    console.log("I win!");
} else if (myScore < player1Score) {
    console.log("I lost :(");
} else {
    console.log("It's a draw!");
}
```
