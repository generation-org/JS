<img align="right" width="150" height="150" src="https://media-exp1.licdn.com/dms/image/C4E0BAQF7BYCCZt5epw/company-logo_200_200/0?e=2159024400&v=beta&t=qUAFP9bUgBEEXGVQYpUXW1J_OiP8e0r4rFBpqp8OrxA">

# JS-05 Conditions and Expressions

 <br/>
 <br/>

### Exercise #1

You have a list of names:
`var names = ["Maria", "Antony", "Joy", "Juan"]`

#### Part 1
Write a function to insert a name to the end of the list. 
Add your own name to the end of the list.

#### Part 2
Write a function that takes in a name and checks if the list has that name. It should return back a boolean - true/false.

#### Part 3
Write a function that takes in a list of names. This function should compare the list taken into the `names` list you currently have.
The function should pass back an array with the names that are in both lists.

#### Part 4
Write a function that takes in a list of names and returns a list of Integers with the length of the names in the same order as received. *Hint* use the [push function](https://www.w3schools.com/jsref/jsref_push.asp)


### Exercise #2

What do the following expressions evaluate to?

```
false || (true && false);
true || (11 + 12);
(31 + 22) || true;
true && (1 + 7);
false && (3 + 4);
(1 + 2) && true;
(32 * 4) >= 129;
false !== !true;
true === 4;
false === (847 === '847');
false === (887 == '887');
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;
```

### Exercise #3
Write a function that logs whether a number is between 0 and 25 (inclusive), between 26 and 100 (inclusive), greater than 100, or less than 0.

```
numberRange(25);   // '25 is between 0 and 25'
numberRange(75);   // '75 is between 26 and 100'
numberRange(125);  // '125 is greater than 100'
numberRange(-25);  // '-25 is less than 0'
```

## Additional Exercises

What is shown on the console when f is console.log'd?

```
var a;
var b = null;
var c = undefined;
var d = 4;
var e = 'five';
var f = a || b || c || d || e;

console.log(f);
```
