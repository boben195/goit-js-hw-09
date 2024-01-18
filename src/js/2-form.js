
const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const input = form.querySelector('input[name="email"]');
const textarea = form.querySelector('textarea[name="message"]');

const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData) {
    input.value = savedData.email;
    textarea.value = savedData.message;
  }

  form.addEventListener('input', function () {
    const formData = {
      email: input.value,
      message: textarea.value
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = {
      email: input.value,
      message: textarea.value
    };
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    input.value = '';
    textarea.value = '';
  });

