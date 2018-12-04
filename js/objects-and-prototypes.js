// Objects and prototypes

// in additionnto its special properties,every javascript object has an internal property called prototype .This is a link (known as refernce)to another object.When trying tp access a property that does not exist in a object Javascript tries to find this property in the prototype of this object.

// var anObject = {
//     a:2
// };

// // Create anotherObject using anObject as a prototype

// var anotherObject = Object.create(anObject);
// console.log(anotherObject.a);//will show 2


// the javascript staement Object.create() is used to create the object anotherObject based on the prototype object anObject.

// If the prototype of an object does not havr a desired property, then the research continues in its own prototype until we get to the end of prototype chain.If the property was found in objects,access returns the value undefined.

// var anObject = {
//     a : 2

// };

// var anotherObject = Object.create(anObject);

// console.log(anotherObject.a);///will be a 2
// console.log(anotherObject.b);//will be undefined


// This type if relationship between Javascript objects is called delegation: an object delegates parts of its operation to its prototypes.

// Cake prototypes

// var Pastry = {
//     type: "",
//     flavor:"",
//     layers:0,
//     prices:"",
//     occassion:"",
//     // describe the pastry
//     describe: function(){
//         var description =
//         "The " + this.type + " is a " + this.occassion + " pastry,has a " + this.flavor + " flavor " + this.layers + " layer(s), and costs " + this.price + ".";
//         return description;
//     }
// };

// var  muffin = Object.create(Pastry);
// muffin.type = "muffin";
// muffin.flavor = "blueberry";
// muffin.layers = 1;
// muffin.price = "R20";
// muffin.occassion = "breakfast";

// var cake = Object.create(Pastry);
// cake.type = "cake";
// cake.flavor = "vanilla";
// cake.layers = 3;
// cake.price = "R310";
// cake.occassion = "birthday";
 
// console.log(muffin.describe());
// console.log(cake.describe());

// we created a object named Pastry, which brings together the properties common to all the characters.The cake and muffin are created via Pastry as prototype,which delegates its features to them.

// The process of creating a pastry is a ltle repetitive:for each character , you must succesively give a value to each of its properties.you can do better by creating a initialization function.

// var Pastry = {
    // initialize the pastry
    // init: function(type, flavor, layers, price, occasion){
    //     this.type = type;
    //     this.flavor = flavor;
    //     this.layers = layers;
    //     this.price = price;
    //     this.occcasion = occasion;
    // },


// // Describe the pastry
// describe: function() {  
//     var description =
//     "The " + this.type + " is a " + this.occassion + " pastry,has a " + this.flavor + " flavor " + this.layers + " layer(s), and costs " + this.price + ".";
//     return description;
// }
// };

// var muffin = Object.create(Pastry);
// muffin.init("muffin","vanilla",3,"R310","birthday");

// var cake = Object.create(Pastry);
// cake.init("cake","vanilla",3,"R310","birthday");
// console.log(muffin.describe());
// console.log(cake.describe());


// The method init() takes the initial property values if the pastry as parameters.The pastry creation code is therefdore reduced to only 2 steps.

// using objects and prototype create three pizzas, one vegetarian ,one halaal,one meaty(non-shalaal)
// look at the :
// base:thicken or thin
// type of pizza:halaal,vegetarian;meaty(non-halaal)
// layers:
// toppings

var Pizza = {
 init: function(base,type,layers,toppings,price){
        this.base = base;
        this.type = type;
        this.layers = layers;
        this.toppings = toppings;
        this.price = price;
    },

    describe: function(){
        var description =
        "The base of the pizza is " + this.base + ",and is a " + this.type + "." + " The amount layers is " + this.layers + " with delicious toppings such as " + this.toppings + " withe the price of " + this.price + ".";
        return description;
    }
};
 
var vegetarian = Object.create(Pizza);
vegetarian.init("thin","vegetarian","2","avo & pinapple","R70");


var halaal = Object.create(Pizza);
halaal.init("thin","halaal","3","chicken and sweet chilla","R80");

var meaty = Object.create(Pizza);
meaty.init("thick","meaty","4","meat pieces and BBQ sauce","R100");

console.log(vegetarian.describe());
console.log(halaal.describe());
console.log(meaty.describe());



var Pizza2 = {
    init: function(pastry,toppings,place,time){
           this.pastry = pastry;
           this.toppings = toppings;
           this.place = place;
           this.time = time;
          
       },
       describe: function(){
        var description =
        "Make a pizza by using the usual pizza pastry which is " + this.pastry + ",and on the pizza add the toppings such as " + this.toppings+ "." + " Place the the unmade pizza in the " + this.place + " for the minimum time of " + this.time + ".";
        return description;
    }
    };

    var howtomake = Object.create(Pizza2);
howtomake
.init("dou","cheese","oven","30 min");

console.log(howtomake.describe());

