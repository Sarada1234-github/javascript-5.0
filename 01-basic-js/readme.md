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
       In JavaScript, var and let are both used to declare variables, but they have some important differences:

1. 
## SCOPE:
   - var is function-scoped. It means if a variable is declared with var inside a function, it is accessible anywhere within that function.
   - let is block-scoped. It means if a variable is declared with let inside a block (e.g., within curly braces {}), it is only accessible within that block.

2. ## HOISTING:
   - Variables declared with var are hoisted to the top of their enclosing function or global scope. However, their initializations are not hoisted.
   - Variables declared with let are also hoisted, but they are not initialized. This means they remain in a "temporal dead zone" from the start of the block until the declaration is encountered, making it inaccessible until the declaration is encountered in the code.

3. ## RE-DECLARATION:
   - Variables declared with var can be re-declared within the same scope without causing an error.
   - Variables declared with let cannot be re-declared within the same scope. Attempting to do so will result in a syntax error.

4. ## GLOBAL OBJECT PROPERTY:
   - Variables declared with var in the global scope become properties of the global window object in browsers.
   - Variables declared with let in the global scope do not create properties on the global window object.


2/ DIFFERENCE BETWEEN VAR AND CONST .
In JavaScript, var and const are both used to declare variables, but they have significant differences in terms of scope, mutability, hoisting, and redeclaration. Here's a detailed comparison:

### Scope
- **var**: Function-scoped. A variable declared with var is accessible throughout the entire function in which it is declared.
- **const**: Block-scoped. A variable declared with const is accessible only within the block in which it is declared.

### Mutability
- **var**: Mutable. You can reassign a new value to a variable declared with var.
- **const**: Immutable. You cannot reassign a new value to a variable declared with const. However, if the const variable is an object or an array, you can still modify the properties of the object or the elements of the array.

### Hoisting
- **var**: Variables declared with var are hoisted to the top of their scope and initialized with undefined. This means they are available throughout their entire scope but will have the value undefined until the actual line of code where they are assigned a value.
- **const**: Variables declared with const are also hoisted, but they are not initialized. This means they are not accessible before their declaration line, resulting in a ReferenceError if you try to access them before they are declared.

### Redeclaration
- **var**: You can redeclare a var variable within the same scope without any issues.
- **const**: Redeclaring a const variable in the same scope results in a SyntaxError.


### Summary
- **var** is function-scoped, mutable, hoisted with initialization to undefined, and can be redeclared.
- **const** is block-scoped, immutable (in terms of reassignment), hoisted without initialization, and cannot be redeclared.

Using const is generally preferred for variables that should not be reassigned, which can help prevent bugs and make code more predictable and easier to understand.


3 / WHAT IS HOISTING IN JS??

ANS:-
In JavaScript, *hoisting* refers to the behavior where variable and function declarations are moved to the top of their containing scope (either the global scope or the function scope) during the compilation phase before the code execution. This means that you can use variables and functions before they are formally declared in the code.

### Variable Hoisting
For variables declared with var, they are hoisted to the top of their scope and initialized with undefined. This means you can reference them before their actual declaration, but their value will be undefined until the line where they are assigned a value.

#### Example with var
javascript
console.log(x); // undefined
var x = 5;
console.log(x); // 5

Here, the declaration var x is hoisted to the top of the scope, but the assignment x = 5 is not hoisted, so x is undefined when first logged.

### Function Hoisting
Function declarations are also hoisted to the top of their scope. This means you can call the function before it is declared in the code.

#### Example with Function Declaration
javascript
sayHello(); // "Hello, world!"

function sayHello() {
    console.log("Hello, world!");
}

Here, the entire function declaration function sayHello() { ... } is hoisted to the top, so the function can be called before its declaration.

### let and const Hoisting
Variables declared with let and const are also hoisted, but they are not initialized. This creates a "temporal dead zone" (TDZ) from the start of the block until the declaration is encountered. Accessing the variable in the TDZ results in a ReferenceError.

#### Example with let and const
javascript
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 20;


### Summary
- **var**: Declarations are hoisted and initialized to undefined.
- **let** and **const**: Declarations are hoisted but not initialized, resulting in a temporal dead zone.
- *Function Declarations*: Entire function declarations are hoisted.

Hoisting is a fundamental aspect of JavaScript's behavior that affects how and where you can use variables and functions. Understanding hoisting helps avoid common pitfalls, such as accessing variables before their declaration or mistakenly thinking that let and const behave like var in terms of hoisting.





