
// What is a Function?
// A function is a subprogram designed to perform a particular task.
// Functions are executed when they are called. This is known as invoking a function.
// Values can be passed into functions and used within the function.
// Functions always return a value. In JavaScript, if no return value is specified, the function will return undefined.
// Functions are objects.
// Define a Function.
// There are a few different ways to define a function in JavaScript:

// A Function Declaration defines a named function. To create a function declaration you use the function keyword followed by the name of the function. When using function declarations, the function definition is hoisted, thus allowing the function to be used before it is defined.

// function name(parameters){
//   statements
// }
// A Function Expressions defines a named or anonymous function. An anonymous function is a function that has no name. Function Expressions are not hoisted, and therefore cannot be used before they are defined. In the example below, we are setting the anonymous function object equal to a variable.

// let name = function(parameters){
//   statements
// }
// An Arrow Function Expression is a shorter syntax for writing function expressions. Arrow functions do not create their own this value.

// let name = (parameters) => {
//   statements
// }
// Parameters vs. Arguments.
// If you’re new to JavaScript, you may have heard the terms parameters and arguments used interchangeably. While very similar, there is an important distinction to make between these two keywords.

// Parameters are used when defining a function, they are the names created in the function definition. In fact, during a function definition, we can pass in up to 255 parameters! Parameters are separated by commas in the (). Here’s an example with two parameters — param1 & param2:

// const param1 = true;
// const param2 = false;
// function twoParams(param1, param2){
//   console.log(param1, param2);
// }
// Arguments, on the other hand, are the values the function receives from each parameter when the function is executed (invoked). In the above example, our two arguments are true & false.

// Invoking a Function.
// Functions execute when the function is called. This process is known as invocation. You can invoke a function by referencing the function name, followed by an open and closed parenthesis: ().