// using raw Javascript, create three text fields, a button, and a collector div.
// When you click on the button, javascript reads the contents of the text fields, (input fields).
// It then populates the div with three h1 tags all containing the text you typed in.
// The collector div should reset every time you click the button, it should not keep accumulating things.
// Every time you click the button you see only three things appear.

var input_1 = document.getElementById("input1");
var input_2 = document.getElementById("input2");
var input_3 = document.getElementById("input3");
var msg = document.getElementById("message");
var buttoni = document.getElementById("buttoni");

buttoni.addEventListener("click", function(){
  msg.innerHTML = "";
  var h1_msg = document.createElement("h1");
  h1_msg.innerHTML = (input_1.value +" "+ input_2.value +" "+ input_3.value);
  msg.appendChild(h1_msg);
})
