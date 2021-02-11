// alert('I am ALSO JavaScript');
// alert('For I am ALSO JavaScript!')

// CHAPTER 4 - VARIABLES
// let message;

// let DECLARES a variable, we want to use it for MUTABLE variables

// message = 'Hello';

// alert(message); // shows 'message' content

// let message = 'Hello'; // combine variable declaration AND assignment
// alert(message);

/* let user = 'John',
    age = 25,
    greeting = 'Hello'; */

// alert(age);

// variables can ONLY contain letters, digits, or the symbols $ and _
// the first character must NOT be a digit, camelCase is commonly used
// can NOT use hyphens when declaring a variable
// reserved words in JS such as let, class, return, and function CANNOT be used
// if we don't write "use strict", we can declare and assign variables without 
// LET

// variables declared using CONST are called CONSTANTS CANNOT be reassigned
// if you're sure that a variable will NEVER change, declare it with CONST
// constants known PRIOR to execution can be declared in ALL CAPS, i.e., 
// const COLOR_ORANGE = "#FF7F00", hex code for orange declared as 
// COLOR_ORANGE is easier to remember in your program, "hard-coded" value

// let name = 'John';
// let admin;

// admin = name;

// alert(admin)

// let ourPlanet = "Earth";
// let currentUser;

// CHAPTER 5 - DATA TYPES

// 7 TYPES OF DATA

/*

NUMBER

number type can be an integer or float, we also have special-numeric values,
Infinity, -Infinity, and NaN

1/0 gives us Infinity

BIG INT

In JavaScript, the “number” type cannot represent integer values larger than 
(253-1) (that’s 9007199254740991), or less than -(253-1) for negatives. It’s a 
technical limitation caused by their internal representation.

BigInt type was recently added to represent integers of arbritrary length

STRING

we can declare strings with "" or '' or ``

`` or backticks, can be used to embed variables or expressions like f strings
in Python, i.e., 

let name = "John";
alert( `Hello, ${name}!` ); // Hello, John!

** this will NOT work with double or single quotes!

BOOLEAN

only two values, true or false, commonly used to store yes/no values, can also
ex.  let isGreater = 4 > 1
alert(isGreater);  return true (result comparison is yes)

we also have NULL and UNDEFINED, which are similar data types, null values
represent "nothing", "empty", while undefined values are variables that
are declared but UNASSIGNED.

OBJECTS

used to store collections of data or more complex entities, special data type
other data types or PRIMITIVE

SYMBOLS

used to create UNIQUE identifiers for objects, we'll elaborate later on.

TYPEOF

similar to type() in Python, checks the data type, syntax is either
typeof x or typeof(x)

*/

/*

CHAPTER 6 - INTERACTION:  ALERT, PROMPT, CONFIRM

ALERT

ex.  alert("Hello");

this gives us a MODAL WINDOW, modal means the user cannot interact with
the rest of the page until they have dealt with the current window, or
they press OK

PROMPT

prompt is a function that accepts two arguments

ex.

result = prompt(title, [default]);

It shows a modal window with a text message, an input field for the visitor, 
and the buttons OK/Cancel.

title, the text to show the visitor
default, optional second parameter, initial value for the input field

ex.

let age = prompt('How old are you?', 100);

alert(`You are ${age} years old!`); // You are 100 years old!

** IF using internet explorer, it will add "undefined" if the second parameter
is left as "default"

CONFIRM

ex.

result = confirm(question);

The function confirm shows a modal window with a question and two buttons: 
OK and Cancel.

The result is true if OK is pressed and false otherwise.

ex.

let isBoss = confirm("Are you the boss?");

alert( isBoss ); // true if OK is pressed

let name = prompt('What is your name?', "Name?");

alert(`Your name is ${name}!`);

*/


/*

CHAPTER 7 - TYPE CONVERSIONS

STRING CONVERSION

as with alert() functions, String() will convert variables to a string

NUMERIC CONVERSION

ex.

alert("6" / "2"); will return 3 by converting the strings to numbers

Number() will explicitly convert a value to a number.

ex.

let str = "123";
let num = Number(str);

converting the following values will return certain values..

undefined => NaN
null => 0
true and false => 1 and 0, respectively
string => white spaces are stripped, empty string is 0, otherwise
the number is "read" from the string

BOOLEAN CONVERSION

explicit conversion is done with Boolean(value)
values that are "empty", an empty string, 0, null, undefined, NaN become false
other values become true

*/

/*

CHAPTER 8 - BASIC OPERATORS, MATHS

REMAINDER operator: %, returns the remainder, similar to the modulo operator
in Python

EXPONENTATION operator:  **, similar to how we take powers in Python

STRING CONCATENATION is the same as in Python using the + operator, however..

ex.

alert(2 + 2 + '1' ); // "41" and not "221"
will add the numbers, convert to a string and concatenate
but..

alert('1' + 2 + 2 ); // "122" and not "41"
will convert everything to a string and concatenate because
the first operand is a string

this only works with the + operator and no other operator in JS

UNARY +

this works the same as Number()

ex.

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5

OPERATOR PRECEDENCE

** If an expression has more than one operator, the execution order 
is defined by their precedence, or, in other words, the default priority 
order of operators.

remember PEDMAS for precedence and then remember that unary operators (+, -)
have HIGHEST precendence

ASSIGNMENT

an assignment = is also an operator but has very low precedence, so assigning a
variable will take place AFTER caluclations are completed

ex.

let x = 2 * 2 + 1;

alert( x ); // 5

CHAINING ASSIGNMENTS

let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4

but we don't want to write it this way...

c = 2 + 2;
b = c;
a = c;

MODIFY-IN-PLACE

ex.

let c = 5
c = c + 5

as with Python, we can rewrite to add to c as c += 5

INCREMENT/DECREMENT

to increase or decrease a variable by one, this will ONLY work with variables

ex.

let counter = 2;
counter++;
counter--;

we also can use ++counter or --counter and this works slightly different..

ex.

let counter = 2;
++counter;
--counter;

placing the operators before the variable will increment/decrement the variable
and then will return the NEW value (prefix form)

using the operators AFTER the variable will return the OLD value but will still
increment/decrement (postfix form)

BITWISE OPERATORS

Bitwise operators treat arguments as 32-bit integer numbers and work on the 
level of their binary representation.

AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> )

COMMA

comma has very LOW precedence, lower than an = operator, use wisely

allows us to SEPARATE and evaluate several expressions by dividing them
with a comma, but the LAST expressions is only returned

ex.

let a = (1 + 2, 3 + 4);

alert( a ); // 7 (the result of 3 + 4)

PRACTICE

"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2

"10"
unary subtractions converts beginning empty string to 0, then completes 
the rest of the calculation, -1
true+false is converted to numbers and then added, 1
6/"3" = 2
"9px"
"$45"
"4" - 2 = 2
"4px" - 2 = NaN
" -9 5"
unary subtractions converts string to numbers and proceeds with calculations, -14
null becomes 0 after numeric conversion
undefined = NaN after numeric conversion
" \t \n" - 2 = -2, "space characters" are removed after conversion, 
empty strings convert to 0, calculations done as normal

*/

/*

CHAPTER 9 - COMPARISONS

comparison operators are the same as in Python, but..
ALL comparison operators return a BOOLEAN result.

STRING COMPARISON

To see whether a string is greater than another, JavaScript uses the 
so-called “dictionary” or “lexicographical” order.

In other words, strings are compared letter-by-letter.

For example:

alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

he algorithm to compare two strings is simple:

    Compare the first character of both strings.
    If the first character from the first string is greater (or less) than 
    the other string’s, then the first string is greater (or less) than the 
    second. We’re done.
    Otherwise, if both strings’ first characters are the same, compare the 
    second characters the same way.
    Repeat until the end of either string.
    If both strings end at the same length, then they are equal. Otherwise, 
    the longer string is greater.

In the first example above, the comparison 'Z' > 'A' gets to a result at the 
first step.

The second comparison 'Glow' and 'Glee' needs more steps as strings are compared 
character-by-character:

    G is the same as G.
    l is the same as l.
    o is greater than e. Stop here. The first string is greater.

** the comparison algorithm uses the order given in the Unicode index to 
determine what is "greater"

COMPARISON OF DIFFERENT TYPES

when comparing values of different types, JS converts values to numbers

ex.

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1

STRICT EQUALITY

using "==" converts values before checking for equality

the syntax "===" checks the equality WITHOUT type conversion

In other words, if a and b are of different types, then a === b immediately
returns false without an attempt to convert them.

there is also "!==" which is comparable to "!="

COMPARISON WITH NULL AND UNDEFINED

non-strict check, null == undefined, results true

for maths and other comparisons, null is converted to 0 and undefined is 
converted to NaN

strict check, null === undefined, results false because they are a 
DIFFERENT type

*/

/*

CHAPTER 10 - CONDITIONAL BRANCHING, "if", "?""

"if" STATEMENT

the if(...) statement evaluates a condition in parentheses and, if the 
result is true, executes a block of code.

ex.

let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert( 'You are right!' );

In the example above, the condition is a simple equality check (year == 2015), 
but it can be much more complex.

If we want to execute more than one statement, we have to wrap our code block 
inside curly braces:

if (year == 2015) {
  alert( "That's correct!" );
  alert( "You're so smart!" );
}

We recommend wrapping your code block with curly braces {} every time you use 
an if statement, even if there is only one statement to execute. Doing so 
improves readability.

BOOLEAN CONVERSION

** the if (…) statement evaluates the expression in its parentheses and 
converts the result to a BOOLEAN.

Let’s recall the conversion rules from the chapter Type Conversions:

    A number 0, an empty string "", null, undefined, and NaN all become false. 
    Because of that they are called “falsy” values.
    Other values become true, so they are called “truthy”.

THE "else" CLAUSE

The if statement may contain an optional “else” block. It executes when the condition is falsy.

ex.

let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}

"else if"

ex.

let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}

CONDITIONAL OPERATOR "?"

The so-called “conditional” or “question mark” operator lets us do that in a 
shorter and simpler way.

The operator is represented by a question mark ?. Sometimes it’s called 
“ternary”, because the operator has three operands. It is actually the one 
and only operator in JavaScript which has that many.

The syntax is:

let result = condition ? value1 : value2;

The condition is evaluated: if it’s truthy then value1 is returned, 
otherwise – value2.

ex.

let accessAllowed = age > 18 ? true : false;
*/