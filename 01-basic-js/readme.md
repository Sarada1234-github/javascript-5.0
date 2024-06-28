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

1. ## scope:
   - var is function-scoped. It means if a variable is declared with var inside a function, it is accessible anywhere within that function.
   - let is block-scoped. It means if a variable is declared with let inside a block (e.g., within curly braces {}), it is only accessible within that block.

2. ## hoisting:
   - Variables declared with var are hoisted to the top of their enclosing function or global scope. However, their initializations are not hoisted.
   - Variables declared with let are also hoisted, but they are not initialized. This means they remain in a "temporal dead zone" from the start of the block until the declaration is encountered, making it inaccessible until the declaration is encountered in the code.

3. ## re-declaration:
   - Variables declared with var can be re-declared within the same scope without causing an error.
   - Variables declared with let cannot be re-declared within the same scope. Attempting to do so will result in a syntax error.

4. ## global object property:
   - Variables declared with var in the global scope become properties of the global window object in browsers.
   - Variables declared with let in the global scope do not create properties on the global window object.



       2. difference betwwen var and const.

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
 3. what do you mean by haisting.(when we don't declare value of variable but it execute the code)
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


RULES OF VARIABLE:-
- variable names are case sensitive "A" &"a" is different
- only letter ,digit,underscore & $ are allowed.
- only letter ,underscore or $ should be 1st charecter.
- reserver words cannot be variable names.

DATATYPES IN JAVASCRIPT :-
 - datatype is an attribute associatedvwith a piece of data tells a computer system how to interpret its value.
 - in data type we used "typeof" operator to know what type of data it is.
 - mainly in javascrit their are 2 types of datatype.
 1. premitive :-
  - in javascript there are 7 types of premitive datatypes.
  1. number :-number are the type of datatype those it contain some numerical value.
  2. string :- string is a type of data type that can hpld some charecter like names...
  3. boolean : -.in boolean datatype we get boolean value like true and false.
  4. undefined :- in un defined data type data is not define so that it will show undefined.
  5. null : - in this data type we will gwt null for all the values ,means nothing.
  6. bigint :- in this datatype we will gwt big integer.
  7. symbol:-in symbol we will gwt symbol as well as the value we get for the datatype.

 2. non-premitive :-
 - non-premitivve datatype are that type of data type that can hold multiple items in a single time.
 - non - premitive data types are- object,array,function.
   
   object :-
   - object is a non premitive datatype ehich can hold multi[ple of item in one single entity
   -mainly objects are working on (key:value)pair
   - the left hand side our keys and right hand side are the values of the following object.

   ex-
   prathama = {
       college :"GIET",
 address : "BBSR",
 age : 45,
 salary : "4500"
 carrier : "good" 
   }

   OPERATORS IN JS :-
   - Operator are the key features to do some task or operate some task.
   - ex :- A + B
   - in the above example A & B are the operands ,'+' is the operators to do the addition.
   1. ARITHMATIC OPERATOR :-
   (+;-;*;/)
   Modulous-> %
   exponention -> **
 2. UNARY OPERATOR
   increment -> ++
   decrement -> --
 3. ASSIGNMENT OPERATIOR :-(assign some value to the variable)
   (=, +=, -=, *=, %=, **=)
4. COMPARISION OPERATOR:- (compare values)
- it gives the result true or false.
equal to -> ==
not equal to -> !=
equal to & type  -> ===
not equal to & type -> !==
(>, >=, <, <=)

5. logical operator:- checks the logic of the operator (true or false)
logical AND&&
table of AND operator is :-
cond 1, cond2,res (&&)
T + T =T
T + F =F 
F + T =F
F + F =F
LOGICAL OR ||
table of or operator is :-
cond1,cond2,res(||)
T + T = T
T + F = T
F + T = T
F + F = F
 LOGICAL NOT!

 conditional statement :-
 - to implement some condition in the code
 - there RE THREE TYPES OF CONDITONAL STATEMENTS
 1. if condition
  - if condition is true then statement is true otherwise false
  syntax:-
  if(condition){
   statement
  }
 2. if -else condition
  - if condition is true then block executed otherwise its terminate to else condition.
  syntax:-
  if(condition){
   statement
  }

else{
   statement
}
 3. else-if condition :_
 - its check the condition multiple times wherevcondition is true.
 syntax:-
 if(condition){
   statement
 } else if(condition){
   statement
 } else{
   statement
 }
 

 LOOPS IN JAVA SCRIPT :-
 
loops are used to execute a code again and again.
For loop :- syntax - for (initialization,condition,updation){ statements }
example ---

for(let i = 1; i <= 5 ; i++>){ console.log("web bocket") }

output -

web bocket web bocket web bocket web bocket web bocket

While loop :- syntax - while(condition) { statement updation }

Do-while :- syntax- do{ statement updation } while (condition);

For-of loop :- -- It iterate an string and array

for-in loop - -- iterate over objects(key-value pair) syntax - for(let key in objvar){ statement }

home work*
 1.print all even number from 0 to 100
2. crate a game you start with any random number. ask the user to keep guessing the game number untill the user enters correct value.

string in JS :-
- string is a sequence of charecters used to represent text.
- create a sting -> let str = "web bocket"
- string length -> str.length
- string indexing -> str[0],str[1],str[2]....

template literals in js :-
- a way to have a embedded expression in string.
- its denoted on ``. i.e `today is a great day`

string intropolation :-
- to create strings by doing substitution of  placeholders.
- ex -> ` string text ${evpression} string text`


escape symbol :-
\n - new line
\t - tab inside the text

string methods -:
- these are built in functions to compute a string.
1. str.toUppercase()
2. str.toLowercase()
3. str.trim()
4. str,slice(start, end)
5. str1.concat(str2)
6. str.replace(searchVal, newVal)
7. str.chatAt(idx)



Arrays in js  :-


- collection of items.
- ex -
let heros = ["iron man","batman","halk","thor"];
let marks = [89,56,98,23,90];
let info = [ "rahul","89,"delhi",90];

- array index starting from 0.
- ex.arr[0],arr[1],arr[2],.....


looping over the arrays :-
- print the below elemrnt in one by one
- let heros = [  iron man","batman","halk","thor"]

practice question:-
q1. forv a given array with marks of students -> [ 85,97,44,37,76,60].find the average of the marks of the entire class.
q2.  for a given array with prices of 5 items ->[250,645,300,900,50].all items have an offer of 10% off on them.change the array to store final price after applying offer.
