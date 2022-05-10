import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('form.feedback-form');
const emaiIinput = document.querySelector('input[name="email"]');
const textarea = document.querySelector('textarea[name="message"]');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput() {
  const formData = { email: emaiIinput.value, message: textarea.value, }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  if (emaiIinput.value.trim() == '' || textarea.value.trim() == '') {
    alert('Please fill in all input fields.');
    return;
  } else {
    const formData = { email: emaiIinput.value, message: textarea.value, }
    console.log(formData);
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
  }
}

function onPageReload() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage) {
    emaiIinput.value = savedMessage.email;
    textarea.value = savedMessage.message;
  }
}
onPageReload();
