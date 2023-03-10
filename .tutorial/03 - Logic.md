# Logic

Alright! Now we know about variables, it's time to start doing stuff with the data we have.

The simplest, and arguably the most important, statement in JavaScript is the `if` statement.
An `if` statement is constructed like this:
```js
if (condition) {
	// do something in here
}
```
Notice we need a condition in our `if` statement.
Our condition is a `boolean`, a `true` or `false` value.
To get this value we need to use comparison operators.
Yep, there are more operators we need to learn!

| Operator | Action |
|-|-|
| == | Checks whether the data on the left is the same as the data on the right. If the data is not the same, this operator will try coercing the data on the right to the same data type as the data on the left  (`1 == 1` → `true` and `1 == "1"` → `true`). |
| === | Checks whether the data on the left is the same as the data on the right. This operator compares type. Also note that objects will not be equal, even if all properties and there values are the same (unless you are comparing two references to the same object). (This is not relevant for now, however will be important later.) `1 === 1` → `true` and `1 === "1"` → `false` |
| != | Checks whether the data on the left is **not** the same as the data on the right. If the data is not the same, this operator will try converting the data to different types to see if they are the same (`1 != 2` → `true` but `1 != "1"` → `false`). |
| !== | Checks whether the data on the left is **not** the same as the data on the right. This operator compares type. (`1 !== 2` → `true` and `1 !== "1"` → `true`) |
| > | Checks whether the data on the left is **greater than** the data on the right. (`1 > 2` → `false` whereas `2 > 1` → `true`) |
| < | Checks whether the data on the left is **less than** the data on the right. (`1 < 2` → `true` whereas `2 < 1` → `false`) |
| >= | Checks whether the data on the left is **greater than or equal to** the data on the right. (`1 > 1` → `false` whereas `1 >= 1` → `true`) |
| <= | Checks whether the data on the left is **less than or equal to** the data on the right. (`1 < 1` → `false` whereas `1 <= 1` → `true`) |
| ! | Inverts a boolean value (turns `true` to `false` and `false` to `true`). (`!false` → `true` and `!true` → `false`) |
| && | Checks whether the data on the left **and** the data on the right is **`true`**. (`true && true` → `true` but `true && false` → `false` and `false && false` → `false`) |
| \|\| | Checks whether the data on the left **or** the data on the right is **`true`**. (`true \|\| true` → `true` and `true \|\| false` → `true` but `false \|\| false` → `false`) |

JavaScript has what is known as type coercion.
This means that JavaScript sometimes tries to automatically convert values to the type expected.

For example, you can use numbers and strings in an if statement because they are coerced to `booleans`.

All values/data in JavaScript can be `truthy` or `falsy` (meaning when coerced to a `boolean`, it will be `true` if `truthy` or `false` if `falsy`).

All `numbers` except `0` are `truthy` (`0` is `falsy`).

All `strings` except an empty `string` (`""` or `''` or ``` `` ```) are `truthy` (`""` and `''` and ``` `` ``` are `falsy`).

All `objects` apart from `null` (occasionally used to signify there is no value intentionally), `NaN` ('Not a Number', can be the result of operations with numbers and non-numeric values) and `undefined` (the default value of `variables` before you assign them value, for example `let variable;` would result in `variable` being `undefined`) are `truthy` (`null`, `NaN` and `undefined` are `falsy`).

Remember the `!` operator?
The `!` operator will actually coerce values into a `boolean` first based on whether it is `truthy` or `falsy`.

One last thing before we get to the logic.
Generally, programs process data input by a user, so we're going to want to get some simple user input.

In JavaScript hosted on the web, we have `prompt` built-in.
We use parenthesis/brackets (`()`) to call the `prompt` `function`.
This will display the user a box asking them for some input.
We can add a string inside the parenthesis and this string will be displayed when asking for the input.
```js
let input = prompt("Give me some input (please)!");
```
Now let's get back to the `if` statement.

Say we want to check if a user has enough money to pay for an item.
```js
// get the user to tell us how much money they have
let money = prompt("How much money do you have");
// store how much the item costs
let itemCost = 25;

// now we can use an if statement to check if money is greater than or equal to itemCost to see if the user can afford it
if (money >= itemCost) {
	// tell the user they can afford the item
	console.log("You can afford the item!");
}

```
But what if the user can't afford the item?
That's why we have the `else` statement.
`else` joins on the end of an `if` statement and has no condition, the code inside the `if` statement is executed if the condition in the `if` statement is `true`, otherwise, if there's an `else` statement,  the code in the `else` statement is executed.
```js
if (money >= itemCost) {
	console.log("You can afford the item!");
} else { // <- else statement!
	// tell the user they can't afford the item
	console.log("Oh no! You don't have enough money to purchase this...");
}
```
Alright, but what if we want to tell the user they almost have enough money?
How could we do that?
Well, we could add an `if` statement inside of the `else` statement... but that's just messy.
Luckily JavaScript is (and most programming languages are) prepared for this.
We also have the `else if` statement!

The `else if` statement is exactly like the `if` statement, however it must come after an `if` or another `else if` statement.
(Note that there can only ever be one `else` statement in an `if` `else if` `else` 'chain' and it **must be at the end of the chain**.)
```js
if (money >= itemCost) {
	console.log("You can afford the item!");
} else if (money - itemCost >= -5) { // <- else if statement!
	// tell the user they can almost afford the item
	console.log("Oh no! You're 5 dollars or less away from being able to afford this item!");
} else {
	console.log("Oh no! You don't have enough money to purchase this...");
}
```
Now, we can also shorten `if`, `else if`, `else` chains by removing the curly brackets (`{}`) and only having one line of code inside the statemenet:
```js
if (money >= itemCost)
	console.log("You can afford the item!");
else if (money - itemCost >= -5)
	console.log("Oh no! You're 5 dollars or less away from being able to afford this item!");
else
	console.log("Oh no! You don't have enough money to purchase this...");
```
OR
```js
if (money >= itemCost) console.log("You can afford the item!");
else if (money - itemCost >= -5) console.log("Oh no! You're 5 dollars or less away from being able to afford this item!");
else console.log("Oh no! You don't have enough money to purchase this...");
```
We can even further shorten this with the ternary operator (named so because it is the only operator that takes three arguments).

The ternary operator takes a condition (parenthesis (`()`) not required), followed by a quetsion mark (`?`), followed by what should be returned if the condition is `true`, followed by a colon (`:`), followed by what should be returned if the condition is `false`.

So this:
```js
if (true) {
	console.log("True");
} else {
	console.log("False");
}
```
Can be rewritten as this:
```js
console.log(true ? "True" : "False");
```
The `if` statement is the most essential, basic, statment to be aware of, but what if we have lots and lots of conditions?
Well, in that case, we might be better of using the `switch` statement.

The `switch` statement looks like this:
```js
switch (data) {
	case possibleValue1:
		break;
	case possibleValue2:
		break;
	case possibleValue3:
		break;
	// etc
	default:
		break;
}
```

Essentially, we put in some data, and then we put in the different possible values of this data (note that these are not conditions, they are, essentialy, equality checks).
We use the `case` keyword to signify a case, we follow this by the possible value, then a colon (`:`).
We can include the `default` case cover any other possibilites that we didn't provide a case for.
We use break at the end of the statement to signify that we should exit the `switch` statement.
(If you do not include break, the statement will continue running all code until the next break statement.
This can be used to create some more complex conditions.)
```js
// ask the user which to enter the current day using a number from
// 0 to 6, with 0 representing Sunday (it doesn't matter what number
// represents what day, that's just my personal preference.)
let day = prompt("Enter the day of the week using a number (0 is Sunday, 6 is Saturday)");
// there are a number of ways we can convert day to a number, one is
// using the built-in parseInt function which will convert the string
// into a number
day = parseInt(day);

console.log("Today is:");

switch (day) {
	case 0:
		console.log("Sunday");
		break;
	case 1:
		console.log("Monday");
		break;
	case 2:
		console.log("Tuesday");
		break;
	case 3:
		console.log("Wednesday");
		break;
	case 4:
		console.log("Thursday");
		break;
	case 5:
		console.log("Friday");
		break;
	case 6:
		console.log("Saturday");
		break;
	default:
		console.log("Invalid number...");
		break;
}
```
And there you have it, that's the basics of logic.

To practice what you've learnt, go to `Lesson 3.js` in the `Lessons` folder in the file hierarchy.
Once you're finished, press run, then in the webview press 'Lesson 3' to see the result.

Done?
Well?
What are you waiting for?
Keep going!
You've almost finished learning the basics of JavaScript!