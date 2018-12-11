//Never trust user input


//It is vital to validate user inpute before sending it to a server(and again once it arrives there,but lets take things one step at a time)

// Validation can be as simple as making sure that the type of data is correct (number vs.string,valid email address,etc.);it can also be more comples-checking for password strngth,for ex,or parsing a commenet to make sure it contains no URLs.


// During input

const passwordInput = document.getElementById('password-input');
const submitButton = document.getElementById('submit-button');


passwordInput.addEventListener('input', ($event) => {
    if ($event.target.value.length >= 6 && $event.target.value.length <= 12){
        submitButton.removeAttribute('disabled');
    } else{
        submitButton.setAttribute('disabled','true')
    }
});
function myFunction() {
    var x = document.getElementById("text-input");
    x.value = x.value.toUpperCase();
}

//after input

   //add a blur event listener to the comfirmPassword element.

     //Compare the value propertiws of both inputs
        

         //if they are the same,set the border styles to thin solid green and set the display style of errorMsg so that it disappears.

         //if they are different,set the boreder style sto thin solid red and set the display style of errorMsg so that it appears.




