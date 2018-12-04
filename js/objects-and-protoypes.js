// // Objects and prototypes

// // in additionnto its special properties,every javascript object has an internal property called prototype .This is a link (known as refernce)to another object.When trying tp access a property that does not exist in a object Javascript tries to find this property in the prototype of this object.

// var anObject = {
//     a:2
// };

// // Create anotherObject using anObject as a prototype

// var anotherObject = Object.create(anObject);
// console.log(anotherObject.a);