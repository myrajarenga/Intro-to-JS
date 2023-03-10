# Loops

Alright, now there's another important aspect of programming we need to learn about.
Often, programming is very repetitive, so we need to be able to repeat code with very little changes.
To do this, we use `loops`.
`Loops` run blocks of code over and over again until a condition is met.

Let's look at the simplest loop, the `while` loop.
The `while` loop is almost the same as the basic `if` statement, except that it checks if the condition is true, and if so, it repeats the code within it.
```js
while (condition) {
	// some code
}
```
One thing we need to be careful of is (unintentional/uncontrolled) infinite loops.
An infinite loop is a loop that never ends because the condition is always true.
Infinite loops can cause our programs to crash.
```js
// infinite loop
while (true) {
	// the condition never changes so this wil run
	// forever (or until we stop running the program)
}
```
Let's create a countdown from `10` to `0`.
```js
let num = 10; // start at ten
while (num >= 0) { // repeat until num is no longer greater than or equal to 0
	console.log(num); // print the number
	num--; // reduce the number by one
}
```
You'll notice something we haven't learnt about in the above example: `--`.
There are two more operators that we should quickly look at becuase they are quite useful when working with loops.
These operators are `++` and `--`. The former adds `1` to a variable containing a number, the latter subtracts `1` from a variable containing a number.
The operator can either be infront or behind the variable, however this results in slightly different behaviour which we will learn about later.

The next loop we'll look at is the `do while` loop.
This loop works much the same as a `while` loop.
It only really has two differences, the most important being that the condition is checked after the code within is run, not before.
(The second being that the structure is a little different.)
```js
do {
	// some code
} while (condition);
```
To illustrate the difference between `do while` and `while`:
```js
while (false) {
	console.log(true);
}
```
Results in no output. Whereas:
```js
do {
	console.log(true)
} while (false);
```
Results in `true` being output once.

The last loop we will look at is the `for` loop.
This loop is perfect for iterating (looping) through arrays.
Here is what our `for` loop looks like:
```js
for (initialiser; condition; increment) {
	// some code
}
```
At first glance, it's more complicated than our other loops, however, it really isn't.
The `for` loop has three parts: the initialiser where any variables we need for the loop are declared, the condition which is the same as in other loops and the increment which is where we change our variables.
These parts are separated by semicolons (`;`).

Instead of using a `while` loop for our countdown, we can use a `for` loop which makes our code even simpler:
```js
// for (create a variable named i and assign 10 to it; keep looping until i is less than 0; after each loop subtract one from i)
for (let i = 10; i >= 0; i--) {
	console.log(i);
}
```
We can even create multiple variables in a `for` loop by separating each one with a comma.
We can even skip parts of the statement by just adding a semicolon (`;`):
```js
for (let str = "Hello world!", num = 123.456, bool = true;/*skip the condition*/;/*skip the increment*/) {
}
```
But there's also two variants of the `for` loop.
These are the `for of` loop and the `for each` loop.
Both are useful for looping through `arrays` (which we haven't looked at much yet).

Here's what these loops look like:
```js
for (initialiser of iterable) { }
for (initialiser in iterable) { }
```
The `for of` loop will loop through each element/value/item in an `iterable` `object` (like an `array`).
The `for in` loop will loop through each `property` in an `iterable` `object` (like an `array`).

Personally, I think it's easier to understand these loops through seeing them in use:
```js
const arr = [ "a", "b", "c", "d", "e" ];
for (const item of arr) {
	console.log(item);
}
```
Outputs:
```
a
b
c
d
e
```
These are the items contained within the array.

Whereas:
```js
const arr = [ "a", "b", "c", "d", "e" ];
for (const item in arr) {
	console.log(item);
}
```
Outputs:
```
0
1
2
3
4
```
These are the indexes of each item contained within the array.

While we're on the topic of arrays, let's quickly look at some basic ways of manipulating them:
```js
const array = [ "abc", 123, true, "Hello world!", 123.456 ]
```
We can get an item from an array using its index (position in the array, **starting from 0**):
```js
array[0]; // -> "abc"
array[3] // -> "Hello world!"
```
We can add an item to the end of an array using the `push` method:
```js
array.push(item);

array.push([ 1, 2, 3 ]); // -> [ 1, 2, 3 ]

// array; // -> [ "abc", 123, true, "Hello world!", 123.456, [ 1, 2, 3 ] ]
// this is called a nested array (an array within an array)
```
We can check the length of an array using the `length` property:
```js
array.length; // -> 6
```
We can remove and get the last item in the array using the `pop` method:
```js
array.pop(); // -> [ 1, 2, 3 ]
// array; // -> [ "abc", 123, true, "Hello world!", 123.456 ]
```
We can add an item to the start of an array using the `unshift` method:
```js
array.unshift([ 1, 2, 3 ]); // -> [ 1, 2, 3 ]
// array; // -> [ [ 1, 2, 3 ], "abc", 123, true, "Hello world!", 123.456 ]
```
We can remove an item from the start of an array using the `shift` method:
```js
array.shift(); // -> [ 1, 2, 3 ]
// array; // -> [ "abc", 123, true, "Hello world!", 123.456 ]
```

`Scope` reminder, remember when we talked about that?
If we define a variable within one of these loops, it will only exist inside the loop.

And that's it!
You've now learnt the basics of loops!

To practice what you've learnt, go to `Lesson 4.js` in the `Lessons` folder in the file hierarchy.
Once you're finished, press run, then in the webview press 'Lesson 4' to see the result.

Finished?
Onwards!
To the last lesson!