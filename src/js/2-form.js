const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const input = form.elements.email;
const textarea = form.elements.message;

const localInfo = JSON.parse(localStorage.getItem(STORAGE_KEY));



form.addEventListener('input', event => {
    const formInfo = {
        email: input.value.trim(),
        message: textarea.value.trim()

    }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formInfo))
});


form.addEventListener('submit', event => {
    event.preventDefault();


    const items = event.target.items;

    const formInfo = {
        email: input.value.trim(),
        message: textarea.value.trim()

    }
    if (event.target.items.input.value.trim() !== '' &&
        event.target.items.textarea.value.trim() !== '') {
        console.log(formInfo);
        localStorage.removeItem(STORAGE_KEY);
        form.reset();
    }


});
