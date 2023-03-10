# Functions

We've addressed that code can often be very repetitive.
Loops are great for repeating code in one go, but what if we want to do the same thing multiple times, but not all at once?
Well, that's why we have `functions`!

A `function` is like a shortcut to run a specific block of code based on some `parameters` (literally).

A basic function looks like this:
```js
function function_name() {
	// some code
}
```
Any valid variable name is also a valid function name (Refer to lesson 2 if you need a refresher on what valid variable names are).

Then, to run the function, all we do is use the function name followed by a pair of parenthesis (`()`) and a semicolon (`;`).
```js
function_name();
```
Often we want to use data that we get/generate/create within a function.
To pass this data out from the function, we use the `return` keyword followed by the data we want to return.
We can only return once from a function, once the return keyword is run, the function will be exited.
```js
function twoPlusThree() {
	return 2 + 3;
}
```
Then to access the data, we simply call the function the same way we did above:
```js
twoPlusThree(); // -> 5
```
We can assign this data directly to a variable:
```js
const five = twoPlusThree(); // -> 5
```
Now let's take this to the next level, sometimes we also want to pass some data into the function for it to work with.
This is when we use parameters.
Parameters are like local variables only defined within the function.
We add parameters to the function between the parenthesis.
We separate parameters with commas.
```js
// we add our parameters between the parenthesis (I only named them x and y out of personal preference)
function add(x, y) {
	return x + y;
}
add(2, 3); // -> 5
```
But what if we don't neccessarily now how many parameters we will receive?
Well, there's a solution for this: the spread operator.

Essentially, we put three fullstops (`.`) before our last parameter in the function definition, and this will result in any extra parameters being converted into an array and passed in as the last parameter.
```js
// we get 
function add(x, y, ...numbers) {
	// add x and y together
	let sum = x + y;
	// use a for loop to loop through each extra parameter
	for (let i = 0; i < numbers.length; i++) {
		// add the extra parameter to the sum
		sum += numbers[i];
	}
	// return the sum
	return sum;
}
add(1, 2, 3, 4, 5, 6, 7, 8, 9); // -> 45
```
And that's it!

To practice what you've learnt, head to `Lesson 5.js` in the `Lessons` folder in the file hierarchy.
Once you're finished, press run, then in the webview press 'Lesson 5' to see the result.

Finished?
Well, start the next lesson!
...
Oh wait, there isn't another lesson!
You've finished the tutorial!
Congratulations!