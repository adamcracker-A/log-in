
let username;
let email;
let password;


document.getElementById("mysb").onclick = function(){
    username = document.getElementById("myinput1").value;
    email = document.getElementById("myinput2").value;
    password = document.getElementById("myinput3").value;
    console.log(username+email);   
}
