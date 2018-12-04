// modify documents after they have finished loading-add new content to a page,change the color of an element to reflect a changinging state,or remove an elemnt the user does not need anymore;

// intweact with your users-whether ticking a box ,commenting on a blog post ,or submitting a tax form, your users need to be able to communicate with you,and Javascript allow them to be so;

// send and recieve data to and from external APIs-harness the power of the thousands of useful APIs that already exist or plug your frintend app into your own custom backend.


// Get acces to the DOM

// document.getElementsByTagName()
// document.getElementsByClassName()
// document.querySelector()
// document.getElementById()


function myFunction() {
  
    document.getElementById("demo").style.color = "blue";
    document.getElementById("demo").style.color = "red";
}

// create a html file,
// create a paragraph with some text describing what document object module is.
// below the paragraph must have two buttons,first blue,and second red.
// when you click on thhe blue button the color of the paragraph should change to  blue, and red to red.

function changeColor(newColor){
    let btn = document.getElementById('demo2');
    btn.style.color = newColor;
}