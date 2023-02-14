function feedback() {
    let name = document.getElementById('name').value;
    alert("Thank you " + name + " for your feedback.");
  }
  
let submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", feedback);



var inputs = document.querySelectorAll(".my-input");

for (var i = 0; i < inputs.length; i++) {
  var input = inputs[i];

 
  input.addEventListener("focus", function() {
    this.style.backgroundColor = "black"; 
  });

 
  input.addEventListener("blur", function() {
    this.style.backgroundColor = ""; 
  });

 
  input.addEventListener("input", function() {
    this.style.backgroundColor = "yellow"; 
  });
}