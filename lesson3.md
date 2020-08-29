<!-- .slide: id="lesson3" -->

# Basic Frontend - Spring 2020

Lesson 3, Tuesday, 2020-09-01

---

### what we learned last time

* Variables are pointers to values

* We can use operators with variables just like with values

* Use `<script src="xxx.js"></script>` to add a JavaScript file to your HTML webpage.

* Use `//` to write comments.

* Use `console.log(...)` to output values to the console.

---

### We had a HomeWork

You have an online shop, which sells hats and t-shirts. One of the customers wants to buy 2 hats and 3 t-shirts.

A hat costs 3.99€ and a t-shirt costs 9.99€. What is the total cost?

Create all the variables needed, and output the final result to the console.

---


### Homework solution

```js
let hatPrice = 3.99;
let tShirtPrice = 9.99;

let hatAmount = 2;
let tShirtAmount = 3;

let totalHatPrice = hatAmount * hatPrice;
let totalTShirtPrice = tShirtAmount * tShirtPrice;

let totalCost = totalHatPrice + totalTShirtPrice;

console.log(totalCost);
```

---

### Recap,  What does it print?

```js
let name = "Sevtap";
console.log("Hello " + name);
```

Answer: It prints "Hello Sevtap" <!-- .element: class="fragment" -->

---

### What does it print?

```js
let greeting = "Hello";
let name = "Sevtap";
console.log(greeting + " " + firstName);
```

Answer: Error, "firstName" is not a variable <!-- .element: class="fragment" -->

---

### What does it print?

```js
console.log("It is " + temperature + " degrees");
let temperature = 22;
```

Answer: Error, "temperature" is not available <!-- .element: class="fragment" -->

---

What do you think `x` and `y` are at the end of the program?

```js
let x = 42;
let y = x;
x = 43;
console.log(x);
console.log(y);
```

Answer: x is 43, y is 42 <!-- .element: class="fragment" -->

So, Why?  <!-- .element: class="fragment" -->

---


### Bass by value

* This is called *pass by value*.
* All basic data types (number, string, ...) are passed by value.
* If you assign a variable to another variable, its value is __copied__.


---


### Operator chaining

We can "chain" some operators, for example:

```js
1 + 2 + 3
(1 + 2) + 3  // same as above
(3) + 3      // returns 6
```


---

### Operator chaining

Is the following code valid?

```js
7 > 6 > 5
```

It's valid JavaScript, but gives you the wrong result. Try it!
<!-- .element: class="fragment" -->

---

### Operator chaining (cont.)

Let's break it down:

```js
7 > 6 > 5
```

```js
(7 > 6) > 5   // 7 > 6 is true
```
<!-- .element: class="fragment" -->

```js
true > 5      // meaningless comparison!
```
<!-- .element: class="fragment" -->

Don't chain operators that return a boolean!

---


BUT what if we want to check if a number is smaller than 7 and bigger than 5?

```js
7 > myNumber > 5  // what do we do now???
```


Logical Operators! <!-- .element: class="fragment" -->


---


<!-- .slide: id="lesson3:operators" -->


### Logical Operators

These operators only make sense on Boolean:

* `&&` Logical AND
* `||` Logical OR
* `!` Logical NOT

---

### Logical AND &&

AND takes two booleans and returns `true` if **both** booleans are `true`

```javascript
true  && true   // true
true  && false  // false
false && true   // false
false && false  // false
```

---


### Example - AND &&

I need bread AND cheese to make a cheese toast

```js
let hasCheese = true;
let hasBread = true;

let canMakeCheeseToast = hasCheese && hasBread;
console.log(canMakeCheeseToast); // ?

```

true!
<!-- .element: class="fragment" -->

---

### Logical OR ||

OR takes two booleans and returns `true` if **at least one** is `true`

```javascript
true  || true   // true
true  || false  // true
false || true   // true
false || false  // false
```

---



### Example - OR ||

To apply to a job, I need to know German OR English

```js
let knowsGerman = false;
let knowsEnglish = false;

let canApply = knowsGerman || knowsEnglish;
console.log(canApply); // ?

```

false!
<!-- .element: class="fragment" -->


---

### Let's practice

Use JavaScript to compute:

* Am I the youngest person in the group?
* Am I younger than at least one person in the group?


The group is you, the person to your left and the one to your right.

---

### Solution

Lets assume my age is 42.

Am I the youngest person in the group?

I need to be younger than person to my left AND I need to be younger than person to my right

```js
(42 < 20) && (42 < 35)  // false - I am not the youngest person
```


---

Am I younger than at least one person in the group?

I need to be younger than person to my left OR I need to be younger than person to my right

```js
(42 < 20) || (42 < 35)
// false - I am not younger than at least one other person
```

---

### Logical NOT !

Logical NOT negates a boolean:

```javascript
!true  // false
!false // true
```

Example: Am I NOT the youngest person?

---


### Operator precedence

What do you think is the result?

```js
2 + 2 * 2
```

Result: `6` <!-- .element: class="fragment" -->

---


* Operators have priorities
* Operators with higher precedence are evaluated first.
* For example: multiplication `*` is more important than addition `+`
* [You can see the full list here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

---


Parentheses have the highest precedence and always win:

```js
(2 + 2) * 2   // 8
2 + (2 * 2)   // 6
```

Always use parentheses when chaining!

It makes your code more clear.


---

### Quiz

What does the following return?

```js
(false && false) || true
```

<br/>


```js
(false && false) || true   // false && false is false
false || true              // returns true
```
<!-- .element: class="fragment" -->

---

### TIP: variables instead of chaining

Which is more understandable?

```js
42 > 22 && 42 > 35
```

Or

```js
let myAge = 42;
let leftPersonAge = 22;
let rightPersonAge = 35;

let olderThanLeft = myAge > leftPersonAge;
let olderThanRight = myAge > rightPersonAge;
let isOldest = olderThanLeft && olderThanRight;
```

---


### Quick Quiz, now in VSCode!

Let's say, everyone here wants to go to the cinema.

How many people in total are going to the cinema?
<!-- .element: class="fragment" -->

A ticket to watch the movie *The Joker* costs 8€, how much do we have to pay in total?
<!-- .element: class="fragment" -->

Saskia and I volunteered to pay for the tickets, how much each one pays?
<!-- .element: class="fragment" -->


---

### Quick Quiz (Cont.)


I can only pay 100€, is it enough?


The cinema will only allow us to enter if we are less than 30 people and if we pay more than 100€, will we get in?
<!-- .element: class="fragment" -->


---


### Recap

| Group | Operators | Example |
| ----- | --------- | ------- |
| Numerical Operators | `+ - * /` | `5 + 4 * 3`<br/>`7 / 2 - 2`<br/>`"Hello" + " World"` |
| Comparison Operators | `=== !== < > <= >=` | `temperature !== 25`<br/>`age >= 18` |
| Logical Operators | &#124;&#124; `&& !` | `a && !b`<br />`x >= 5 && x < 15` |
| **Combined Operators** | `+= -= *= /= ++ --` | `a *= 2`<br />`count++` |

---

### Excursus: Combined Operators

This

```js
let myAge = 42;
myAge = myAge + 5;
```

Is the same as this

```js
let myAge = 42;
myAge += 5;
```

---

### Quiz: What's the price?

```js
let price = 10;

// there's a 50 percent sale!
price /= 2;

// price is ??
```

Result: `5`
<!-- .element: class="fragment" -->

---

### Operator ++ and --

Operator `++` and `--` increase (or decrease) the value of a variable by 1

```js
let myAge = 42;
myAge++; // same as myAge = myAge + 1
```

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

Code blocks is the code between `{` and `}`

Should be indented for better readability:

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


### More on the quiz

If we can get in the cinema, log to the console: Nice! we can get in.


If we can't get in the cinema, log to the console: We can't get in :(
<!-- .element: class="fragment" -->


This pattern of doing something when a variable is `true` and something else when the variable is `false` if very common, that is why we have `if else`.
<!-- .element: class="fragment" -->

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
