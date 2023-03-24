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
    loader.style.overflow = 'hidden';
  }, 2500)
});


// animation
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);







// change tab

window.onload = function() {

  var pageTitle = document.title;
  var attentionMessage = 'WHERE TO?';

  document.addEventListener('visibilitychange', function(e) {
  var isPageActive = !document.hidden;

  if(!isPageActive){
      document.title = attentionMessage;
  }else {
      document.title = pageTitle;
  }
  });
};






// burger menu

function myFunction(x) {
  x.classList.toggle("change");
}

$(document).ready(function() {
  $('.menu').hide();

  $('.open-menu').click(function() {
    $('.menu').toggle();
  });

  $('.menu li').click(function() {
    $('.menu').hide();
  });
});



// pause video

document.getElementById("pauseBtn").addEventListener("click", pauseVid);

function pauseVid() {
  var vid = document.getElementById("myVideo");
  if (vid.paused) {
    vid.play();
    document.getElementById("pauseBtn").innerHTML = "Pause Video";
  } else {
    vid.pause();
    document.getElementById("pauseBtn").innerHTML = "Play Video";
  }
}


