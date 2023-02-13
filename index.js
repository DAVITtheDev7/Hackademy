function feedback() {
    let name = document.getElementById('name').value;
    alert("Thank you " + name + " for your feedback.");
  }
  
let submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", feedback);