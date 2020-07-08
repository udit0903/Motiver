
function openForm() {
     document.getElementById("myForm").style.display = "block";
}
function closeForm() {
     document.getElementById("myForm").style.display = "none";
}
function write_below(form)
{
     var email = document.forms.write.email.value;
     document.getElementById('email').innerHTML="To: "+email;
     var message = document.forms.write.message.value;
     document.getElementById('message').innerHTML="Message: "+message;
     document.getElementById("myForm").style.display = "none";
     return false;
}
function myFunction() {
     var x = document.getElementById("myNavbar");
     if (x.className === "navbar") {
           x.className += " responsive";
     } else {
           x.className = "navbar";
     }
}
