/* ===========While loop ======*/

// A while loop  lets you repeat code while a certain condition is true.

// console.log("start of program");
// let number = 1;
// while (number= 1000){
//     console.log(number);
//     number++;
// }
// console.log("end of program");

/* ======Basic Syntax === */


/* ====
while (condition){
    // code to run while the conditon is true
}
======*/


// Before eavh loop iteration, the condition in parentheses is evaluated to determine whether its true or not.The code associated whith a loop is called its body!

// If the condition ture, the code in the while loop's body runs.Afterwards, the conditon is re-evaluated to   see if its still true or not.The cycle continues!


// If the conditon is false, the code in the loop stops running or doesnt run.

/*================== For Loop ==============*/


// You'll often need to write loops with conditions that are based on whta happens in the loop body,like in our example.Javascript offers another loop type tp account for this :the for loop.

/* ========

for (initialization , condition, final - expression) {
    // code to run when condition  is true
}

==========*/


// This is a little more complicated  than while loop syntax:

// Initialization only happens once, when the code first kicks off.

// The condition is evaluated once before the loop runs each time.Its often used to update a counter variavles, as we saw in the while loops examples.


// for(var counter = 1; counter <= 5; counter++){
//     console.log(counter);
// }

/* ====== Which loop should I use? =======*/


// let letter = "";
// while (letter !=="X"){
//     letter = prompt ("Type any letter or X to exit:");
//     console.log(letter);
// }

/*==========
Begin 

         Get out the auce pan
         Add some oil
         pour  mince into it
         cook the mince 
         chop the vegetables
         stir - fry the vegetables
         taste - test the vegetables
              if the veggies are good
                  remove them from the stove
              if the veggies arent good
                 add more pepper and spices
              if the veggies arent cooked enough
                  

=====*/


//Same idea more simplified 


/*===
Begin  
         cook mince
         stir - fry vegetables
         add fillings
         role togther

End 
======*/


// the first version details all the individual action that makes up the cooking process.The second break down the recipe into broader steps and introduced=s concepts that coulld be re-used for other disshes as well like cook,stir-fry, add , and roll.

// Our code so far has mimicked the first example(in that its been verrr literal), but its time to start modularizing out example into sub - steps so we can re-use bits and pieces as needed.In Javascrpt,these sub-steps are called funtions!

/* =======Funtions ======*/

// A funtion is a group of instructions that performs a particular task.



// Declaring a function

// Creating a function is called declaration

/* ======

// Declaration a function called myFunction funtion myFuntion(){
    // Function actions
}


===*/

// The keyword return indicates that a return value will be given,which is specified immediately after the word.


// function greetingUser() {

//     var name = prompt("Enter your first name ");
//     console.log("Hello! " + name);
// }
// greetingUser();

// function sayHello(){
//     return "Hello!";
// }

// console.log("Start of program");
// let result = sayHello();
// console.log(result);
// console.log("End of program")

// // Declare myFunction
// function myFunction(){
//     // Calculate return value
//     // ...
//     return returnValue;
// }
// // Get return value from myFunction
// var value = myFuntion();
// // ..