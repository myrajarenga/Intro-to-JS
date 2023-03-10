# Data types and the console

The absolute most important thing in programming is being able to store `data`.
That's why we have `variables`.

You can think of a `variable` as a box.
Each box stores whatever information you put in it.
Better still, these boxes are labelled, so you can quickly access it and it's contents later! 

Before we get to `variables`, we need to discuss something even more important, the information they store.

When programming, information is often refered to as `data`.
There are different types of `data`.
For example, a web application that asks for your name and age is asking for two things, some text, which is known as a `string` (a collection of characters or `char`s, a character being a letter for example), and a `number` (which is just a `number`, in JavaScript).

There are lots of different types of `data`, and you need to know a couple before we begin programming some more fun stuff.

Here's a table showing you the name, a 'definition' and an example of some basic `data` types:


| Data type | Definition | Example/s |
|-|-|-|
| *Integer | A _whole_ quantity or amount (without a fractional component). | `123` |
| *Long | A _very large_ quantity or amount (without a fractional component). | `123456789` |
| *Float | A number with a fractional component. | `123.456` |
| *Double | A high precision float (can accurately store numbers with more decimal places than a `float` can). | `123.456789` |
| Number | A quantity or amount. Decimal numbers are represented with the ten digits (`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`). Numbers can be negative (less than `0`), this is signified with a hyphen/dash/subtraction sign (`-`). Numbers can also have decimal components, this is signified with a full stop/period (`.`) followed by the decimal component of the number. | A whole number: `123`. A negative number `-123`. A decimal number `123.456`. |
| *Char | A single character. | `a` or `&` or `0` etc |
| String | A collection of `char`s forming some text. In JavaScript, strings start and finish with one of quotation marks (`""`), apostrophes (`''`) or backticks (``` `` ```) (must start and finish with the same one). | `The quick brown fox jumped over the lazy dog.` |
| Boolean | Either `true` or `false`. | `true` or `false` |
| Array | A list-like (this can depend on the programming language you are using) collection of data, most commonly symbolised with square braces/brackets (`[]`). Each item in an array has an index (its position in the array, **starting at 0**). An item can be accessed using square bracket 'notation' (`array[index]`). | `[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]` |
| Object | A special structure grouping data together. In JavaScript, this is through properties and values, almost identical to JSON (which actually stands for JavaScript Object Notation). Objects are a more advanced concept so we will look at them much more in depth later. | `{ name: "Matthew", age: 16 }` |

`Data` types with an asterisk (`*`) before them aren't directly applicable to JavaScript, but it is still good to know them.

Now you know some simple `data` types, we'll learn how to log them to the `console`.

To print to the JavaScript `console`, we need to use the built-in `function`, `console.log`.
We'll learn more about `functions` and what we're actually doing later, for now we just need to be able to see the different `data` types in action.

After `console.log`, we need opening and closing parenthesis/brackets (`()`).
Inside the parenthesis/brackets, we can put the `data` we want to print.

Lastly, in JavaScript, as a general rule we finish statements (like the one you're learning) with a semicolon (`;`), the semicolon is the full stop of the programming world!
(Semicolons aren't technically required in JavaScript, however I personally believe it is good practice to always include them.)

So this:
```js
console.log(123);
console.log(123.456);
console.log("Hello world!");
console.log([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);
console.log(true);
console.log(false);
```
Will result in something like this:
```js
123
123.456
"Hello world!"
[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
true
false
```
Let's try this out!

Open `Lesson 1.js` in the `Lessons` folder in the file hierarchy and try printing some `data` to the `console` using `console.log`.
To see the output, press run, then select 'Lesson 1' in the navigation bar at the top of the webview.

Done?
Well, now you're ready to start programming!
(Up next is variables!)