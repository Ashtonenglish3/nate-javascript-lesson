// What is a condition?



// Suppose we want to write a program that makes a user enter a number and then displays a message .
// if the number is positive.Here is the corresponding algorithm.

/*========Enter a number
If the number is positive
Display Message ======= */


//The message should display only if the number is positive: this means it's subject to a condition.

//The if statemenet

// var number = Number(prompt("Enter a number:"));
// if (number < 0) {
//     console.log(number + " is positive");
// }

// Basic syntax:

//if (condition) {
//     //Statements executed when the condition is true
// }

//The pair of opening and closing braces defines what is called a block of code associated with an if statement.This statement represents a test.It can result in the following: "If the condition is true , then execute the instructions contained in the code block."

// The conditions is always placed in parentheses after the if.

// Conditions

// A condition is  an expression that evaluates whether something is true or false.When the value of a conditions is true , we say that this condito=ion is satisfied.


// We have already studied number and string,two types of data in Javascript.Booleans are another type of javascript.This type has two possible values:true or false./

// Any expression producing a Boolean value(either tue or false)can be used as a condition in an if statement.If the of value of this expression is true,the code block associated with it is executed.


//Boolean expressions can be created useing the comprarison operators.

// ===Equal to

// !===Not equal to
// < Less than
// <= Less than or equal to
// > Greater than
// >= Greater or equal to

// Alternative Conditions.


// var age = Number(prompt("Enter a age:"));
// if (age <= 12) {
//     console.log( " you cant watch the movie");
// }

// Alternative conditions

// You'll

// var number = Number(prompt("Enter a number:"));
// if (number > 0) {
//     console.log(number + " is positive");
// }else{
//     console.log(number + " is negative or zero");
// }

// Nesting Conditions

// You cab go next- Level and display a specific message if the entered number is zero.USE ELSE if for a second conditional.See this example,which has a positive test case, negative test case and a last resort of the number being zero:

// var number = Number(prompt("Enter a number:"));
// if (number > 0) {
//     console.log(number + " is positive");
// }else if (number < 0 ){ 
//     console.log(number + " is negative");
// } else {
//     console.log(number + " is zero");
// }

// New task

// Build a program or write a program that helps students decide what to wear  based on the wesather using the if statement , the else staement, or else if statement,
// weather conditon:
// sunny:shorts and tee and slippers
// cloudy:
// rainy:
//  windy:
//  snowy:

var weather = prompt("whats the weather like today:");
if (weather === "sunny") {
    console.log("wear a short,tee and slippers");
}else if(weather === "cloudy"){
    console.log("jacket");
}else if(weather === "rainy"){
    console.log( "wear a rain coat")
}else if(weather === "windy"){
    console.log("wear glasses")
}else if(weather === "snowy"){
    console.log("stay inside")
}else{
    console.log("Not a valid weather type")
}


