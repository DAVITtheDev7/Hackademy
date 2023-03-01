// Navbar

const buttons = document.querySelectorAll('.nav-bar li a');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const checkbox = document.getElementById('check');
    checkbox.checked = false;
  });
});



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
  }, 2000)
});


// animation






// cookies

const acceptBtn = document.getElementById("accept-cookies");

acceptBtn.addEventListener("click", () => {
  document.cookie = "accepted-cookies=true; expires=" + new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString();
  
  const cookieBanner = document.querySelector(".cookie-banner");
  cookieBanner.style.display = "none";
});








// Feedback

document.getElementById("feedback-btn").addEventListener("click", function(event) {
  event.preventDefault();
  var message = document.getElementById("message");
  var name = document.getElementById("name").value
  message.style.display = "block";
  message.innerHTML = "მადლობა "+name+" გამოხმაურებისთვის!";
  setTimeout(function(){ message.style.display = "none"; }, 2000);
});



