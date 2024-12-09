const h1Element = document.querySelector('.header h1');
const text = "Project AI";
let index = 0;

function typewriterEffect() {
    if (index < text.length) {
        h1Element.innerHTML += text.charAt(index);
        index++;
        setTimeout(typewriterEffect, 150); // Typing speed in milliseconds
    }
}
document.addEventListener('DOMContentLoaded', typewriterEffect);



// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter');
const successMessage = document.getElementById('newsletter-success');

newsletterForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission
  const email = document.getElementById('email').value;

  if (email && email.includes('@')) {
      successMessage.style.display = 'block'; // Show success message
      setTimeout(() => {
          successMessage.style.display = 'none'; // Hide after 3 seconds
      }, 3000);
  } else {
      alert('Please enter a valid email address.');
  }
});