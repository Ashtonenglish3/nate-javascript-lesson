// What is a object?

// Think about objects in the non-programming sense like a pen.A pen can have different ink colors ,be manufactured by different people,have a differnt tip;and many other properties.

// Similarly and object in programming is an entitiy that has properties.Each propperty defines a characteristics of the object.A property csan be information associated with the object(the color of the pen)or action(the pen's ability to write).

// what does this have to do with code?

// Object - oriented programming (OOP for short)is a way to writ programs using objects.When using OOP you write;create and modify objects and the objects make uo your program.

// OOp changes the way a program is written and oraganised.So far you've been writting function-based code;sometimes called the procedural programming.Mow lets


// Javavscript and objects

// Like many other languages Javascript involves programming objects so we  can say its and object-oriented language .It provides a number of predefined objects while also letting you  own .


// Creatting an object
// Here is the Javascript representation of a blue bic ball pen

// let pen={
//     type: "ballpoint",
//     color: "blue",
//     brand:"bic",
//     brand:"penflex"
// };


/*===================

Create a new object in javascript by setting its properties within a pair of curly braces:(....);

===*/


// The abobe code defines a variable named pen whose value is an object:you can therefor say pen is an object.This object has thre properties :type;color,and

// console.log("My pen type is " + pen.type);
// console.log("The color of the pen is " + pen.color);
// console.log("Its from the best stationary brand which is " + pen.brand);


// since you now know hown to access properties,you can start combining them with other elements;like strings as part of a sentence.

// Create a sentenceusing concactencation

/*====

Let's create a cake in javascript that has several properties:

flavor,like vanilla,chocolate,etc.

price in madibas

layers(1,2,3.....10?!)
 
=======*/
// var name = prompt("What is your name?"),
// flavor = prompt("What is your fav flavor cake?")
     

// console.log("Hi i am " + name)
// console.log("My favourite flavor is " + flavor)
// let cake={
//     flavor:"chocolate",
//     price:"R150",
//     layer:"3",
//     toppings:"oreo",
//     icing:"nutella"

// }
// console.log("The cake has my favourite flavor which is " + cake.flavor + " . " + " The price of the cake is " + cake.price + " with a amount of layers on the cake is " + cake.layer + ".It has a few " + cake.toppings + " biscuits on it" + " and is covered with " + cake.icing + " all over it.");


// cake.layer = "5"

// console.log("The cake has my favourite flavor which is " + cake.flavor + " . " + " The price of the cake is " + cake.price + " with a amount of layers on the cake is " + cake.layer + ".It has a few " + cake.toppings + " biscuits on it" + " and is covered with " + cake.icing + " all over it.");

// Methods on objects

// we had to write lengthy  console,log statements each time to show the cake desription.There a cleaner way to accomplish this.

// adding a method to a object

// Describe a cake

// function describe(cake){
//     var describe = "The " + cake.occasion + " cake has a " + cake.flavor + " flavor," + cake.layers + " layers, and cost " + cake.price + ".";
//     return describe;
// }

// console.log(describe(cake));


// the function describe() takes an object as a parameter.We pass it the cake, and it accesses that objects properties and prints them out in that sentence.

// Now for an aleternative approach :creating a describe property that houses a method.

let cake = {
    flavor: "sweet-vanilla & caramel",
    layers: 5,
    price: "R300",
    occasion : "birthday",



// Describe the cake
describe: function (){
    var description = "The " + this.occasion + " cake has a " + this.flavor + " flavor," + this.layers +"layers, and cost " + this.price + ".";
    return description
    
 }
};

console.log(cake.describe());

// the cake is actually for the wedding!

cake.occasion = "wedding";

// now our objecy has a new property available to it describe.The value of this property is a functionn that returns a text description of the cake.

// A property whose value is a function is called a method,

/* --------
Remember the parenthesis ,even if empty ,when calling a method!
------------*/




