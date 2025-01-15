const text = "Erfindungen von Schüler*innen am Gymnasium Langenhagen!";
const initialDelay = 500; // milliseconds
const letterDelay = 50; // milliseconds

let index = 0;

function writeText() {
  document.getElementById('text').innerText = text.slice(0, index);
  index++;
  
  if(index <= text.length) {
    setTimeout(writeText, letterDelay);
  }
}

setTimeout(writeText, initialDelay);

document.addEventListener("DOMContentLoaded", function() {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navLinks = document.getElementById('nav-links');

  hamburgerMenu.addEventListener('click', function() {
      navLinks.classList.toggle('show');
  });
});
