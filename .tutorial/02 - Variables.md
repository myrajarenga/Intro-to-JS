# Variables

`Variables`, the brick from which we build programs.
You learnt a little about what `variables` are in the previous lesson, so let's get straight into them!

There are three ways to declare a `variable` in JavaScript, each being slightly different.
Declaring a `variable` looks like this:
```java
keyword variablename = data;
```
The three keywords you can use are `var`, `let` and `const`.

Each acts slightly differently, `let` declares a `local` variable and `const` declares a `local` constant (a variable that cannot be changed, attempting to change a constant once declared will result in an error).
`let` was introduced to handle inconsistancies with `var`, generally it is better practice to use `let` or `const` rather than `var`.

In JavaScript (and most programming languages), there is a magical (not really) thing called `scope`.
`Scope` determines what code has access to which `variables`, this will become very important later.
The basic rule is that a `local variable` can only be accessed from inside the same pair of curly braces/brackets (`{}`).

Let's look at how we would `declare` or `define` (the programming terminology for creating or making a `variable`) a `variable` with each of these keywords:
```js
var bool = true;
let str = "Hello world!";
const pi = 3.14159;
```

`Variable` names can include any alphanumeric character (`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`,`P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`, `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `_`, `$`).
A `variable's` name **cannot** _start_ with a number.
`Variable` names are also **case sensitive** in JavaScript, meaning a `variable` declared as `ABC` cannot be accessed using `abc`.

We can access a `variable` using the `variable`'s name.
We could put a `variable`'s name inside `console.log`, and the value that `variable` stores would be printed to the console.
```js
console.log(bool); // -> true
console.log(str);  // -> "Hello world!"
console.log(pi);   // -> 3.14159
```
You can change the value of a `variable` you've defined (that isn't a constant declared with `const`) the same way you declare a `variable`, just without the keyword.
```js
bool = false;
str = "The quick brown fox.";

console.log(bool); // -> false
console.log(str);  // -> "The quick brown fox"
```
## Operators
`Operators` are very important, they allow us to change our variables.

Here is a table of the basic `operators` and what they do:
| Operator | Action |
|-|-|
| = | Assigns a new value to a variable. `variable = 1` → `1` |
| + | Adds two numbers together: `1 + 1` → `2`. OR. Concatenates (joins) two strings together: `"ABC" + "DEF"` → `"ABCDEF"`. |
| - | Subtracts the number on the right hand side of the operator from the number on the left hand side of the operator: `3 - 2` → `1`.  |
| * | Multiplies two numbers together: `3 * 4` → `12`. |
| / | Divides the number on the left hand side of the operator by the number on the right hand side of the operator: `12 / 4` → `3`. |
| % | Returns the remainder when the number on the left hand side of the operator is divided by the number on the right hand side of the operator: `5 % 2` → `1` |
| ** | Multiplies the number on the left hand side of the operator by itself as many times as the number on the righ hand side of the operator: `4 ** 2` -> `16`. (Exponentiation.) |

```js
let num = 4;   // -> 4
num = num + 6; // -> 10
num = num / 5; // -> 2
num = num * 2; // -> 4
```
We can combine `operators` and the assignment `operator` (`=`) to get some shortcut assignment `operators`.
These assignment `operators` enable us to write shorter, more readable code.

We can simplify the above code to this:
```js
let num = 4; // -> 4
num += 6;    // -> 10
num /= 5;    // -> 2
num *= 2;    // -> 4
```
We can even simplify this to one line:
```js
let num = 4 + 6 / 5 * 2; // -> 6.4
```
Huh? We got `6.4`?
How'd that happen?
It's time to talk about **`operator` precedence**.

In JavaScript (and most programming languages), certain `operators` have precedence (they are read by the computer as more important, and hence applied first).
Usually `operator` precendence works the same way it would in regular maths (BIDMAS or BIMDAS), in other words multiplication and division are done before addition and subtraction.
Also like in maths, we can add parenthesis/brackets (`()`) to make specific groups more important.

Using parenthesis, we can get the number we expected previously:
```js
let num = (4 + 6) / 5 * 2; // -> 4
```
Open `Lesson 2.js` in the `Lessons` folder in the file hierarchy and try making your own variables to practice what you've learnt.
Remember, when you're ready to test your code, press run and in the webview click the 'Lesson 2' tab.

Done?
Don't stop now!
Keep going!