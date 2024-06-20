what is javascript and why we use it?
-java script is a logic based programming language where we can create our code project functionality in that.
-JS is a high level programming laguage for build web pages.
-now we used the ES6 (echma script 6)version of JS, in other word we called vanila javascript.
-runtime envioroment of javascript is node js.

variable:-

variable is a container to store some data.
in javascript we have 3 type of variables
1. let :-
- Let is a type of variable which is used for changing the variable name later.
- now these days most of the cases we used let for creating variable.
- let is a block scope code so we have been using let for most of the cases
-
2. var
- var is atype of variable which is also used for cchanging the variable later stage.
- var is used in oldest  browser so now a days we dont use var most of the time.

3. const 
- const is a type of variable where we can't change our data further.
- const means constant to store some data like number ,integer etc...

task:-  
       1. difference betwwen let and var 
       
      1. SCOPE:-
      - VAR:- function scoped,means that if we declare a variable with VAR inside a function ,then it can be accessible throughout the entire function.
       -LET:- block scoped means if we declare a variable with LET inside a block ,it is only accessible within that block.
       2.HOISTING:-
       VAR :- variables declared with VAR are hoisted to the top of their scope.that means they are available through out their scope,but they are initialized with UNDEFINED untill the actual line of code where they are assigned a value.
       -LET:- variables declared with LET are also hoisted but they are not initialized.that means they are not accessable before their declaration line , resulting in a REFERENCEeRROR if you try  to access before they are declared.
       3.REDECLARATION:-
       -VAR:- you can redeclare a VAR within the same scope without any iisues.
       -LET:- redeclaring a let variable in the same scope results  a SYNTAXERROR. 
       2. difference betwwen var and const.
       In JavaScript, var and const are both used to declare variables, but they have significant differences in terms of scope, mutability, hoisting, and redeclaration. Here's a detailed comparison:

SCOPE:-
- VAR:- Function-scoped. A variable declared with var is accessible throughout the entire function in which it is declared.
- CONST:- Block-scoped. A variable declared with const is accessible only within the block in which it is declared.

MUTABILITY:-
- VAR:- Mutable. You can reassign a new value to a variable declared with var.
- CONST:- Immutable. You cannot reassign a new value to a variable declared with const. However, if the const variable is an object or an array, you can still modify the properties of the object or the elements of the array.

HOISTING:-
- VAR:- Variables declared with var are hoisted to the top of their scope and initialized with undefined. This means they are available throughout their entire scope but will have the value undefined until the actual line of code where they are assigned a value.
- CONST:- Variables declared with const are also hoisted, but they are not initialized. This means they are not accessible before their declaration line, resulting in a ReferenceError if you try to access them before they are declared.

REDECLARATION:-
- VAR:-You can redeclare a var variable within the same scope without any issues.
- CONST:- Redeclaring a const variable in the same scope results in a SyntaxError.

SUMMERY:-
- VAR:- is function-scoped, mutable, hoisted with initialization to undefined, and can be redeclared.
- CONST:- is block-scoped, immutable (in terms of reassignment), hoisted without initialization, and cannot be redeclared.

  3. what do you mean by hoisting.(when we don't declare value of variable but it execute the code)
In JavaScript, *hoisting* refers to the behavior where variable and function declarations are moved to the top of their containing scope (either the global scope or the function scope) during the compilation phase before the code execution. This means that you can use variables and functions before they are formally declared in the code.

VARIABLE HOISTING:-
For variables declared with var, they are hoisted to the top of their scope and initialized with undefined. This means you can reference them before their actual declaration, but their value will be undefined until the line where they are assigned a value.


FUNCTION HOISTING:-
Function declarations are also hoisted to the top of their scope. This means you can call the function before it is declared in the code.


LET AND CONST HOISTING :-
Variables declared with let and const are also hoisted, but they are not initialized. This creates a "temporal dead zone" (TDZ) from the start of the block until the declaration is encountered. Accessing the variable in the TDZ results in a ReferenceError.


### Summary
- **var**: Declarations are hoisted and initialized to undefined.
- **let** and **const**: Declarations are hoisted but not initialized, resulting in a temporal dead zone.
- *Function Declarations*: Entire function declarations are hoisted.

Hoisting is a fundamental aspect of JavaScript's behavior that affects how and where you can use variables and functions. Understanding hoisting helps avoid common pitfalls, such as accessing variables before their declaration or mistakenly thinking that let and const behave like var in terms of hoisting.




