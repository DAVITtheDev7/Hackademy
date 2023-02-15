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
    this.style.backgroundColor = "black"; 
  });
}




const elements = document.querySelectorAll('h1,p,a');

function checkIfInView() {
  elements.forEach(element => {
  const elementTop = element.getBoundingClientRect().top;
  const elementBottom = element.getBoundingClientRect().bottom;

  if (elementTop < window.innerHeight && elementBottom >= 0) {
        element.classList.add('show');
  } else {
        element.classList.remove('show');
      }
    });
  }
window.addEventListener('scroll', checkIfInView);
checkIfInView();



// Loading

window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  setTimeout(function() {
    loader.style.display = 'none';
  }, 2000);
});
