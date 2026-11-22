q1
forEach() is an array method used to execute a function
for each element in an array. It does not return a new array.
for...of is a loop used to iterate over iterable objects
such as arrays and strings. It supports break and continue.
Use forEach when you want to perform an action for every
array element.
Use for...of when you need more control over the loop,
such as using break or continue.

q2
Hoisting is a JavaScript behavior where variable and function
declarations are processed before the code is executed.
Variables declared with var are hoisted and initialized
with undefined.
Variables declared with let and const are also hoisted,
but they cannot be accessed before their declaration.
The period between entering the scope and the actual
declaration is called the Temporal Dead Zone (TDZ).

ex/Hoisting
console.log(x);
var x = 10;

ex/TDZ
console.log(y);
let y = 20;

q3
The == operator compares two values after performing
type conversion if necessary.
The === operator compares both value and data type
without performing type conversion.
It is generally recommended to use === to avoid
unexpected type conversion.

q4
try-catch is used to handle errors in JavaScript.
The try block contains code that may cause an error.
If an error occurs, the catch block executes and handles
the error instead of stopping the program unexpectedly.
In asynchronous operations, try-catch can be used with
async/await to handle rejected Promises and prevent
unhandled errors.

q5

Type conversion is the process of manually changing
a value from one data type to another using functions
such as Number(), String(), or Boolean().
Type coercion is the automatic conversion of values
from one data type to another by JavaScript during
an operation.
Example of type conversion:
Number("123") returns 123.

Example of type coercion:
"5" + 2 returns "52" because JavaScript automatically
converts the number 2 into a string.

ex/conversion
let x = Number("123");
console.log(x);

ex/coercion
let x = "5" + 2;
console.log(x);