const form = document.getElementById('contact-form');
const emailInput = document.getElementById('email');
const formButton = document.getElementById('submit');

form.addEventListener('submit', (event) => {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    formButton.setCustomValidity('Put your email characters in lower case characters first pls!');
    formButton.reportValidity();
    event.preventDefault();
  }
});

emailInput.addEventListener('input', () => {
  formButton.setCustomValidity('');
});