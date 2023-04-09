import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector(".feedback-form"),
    textarea: document.querySelector(".feedback-form textarea")
};

const STORAGE_KEY = "feedback-form-state";

const formData = {}

refs.form.addEventListener("submit", onFormSubmit);
refs.textarea.addEventListener("input", throttle(onTextareaInput, 1000));

refs.form.addEventListener("input", event => {   
    formData[event.target.name] = event.target.value;
    console.log(formData);
});

savedTextarea();

function onFormSubmit(event) {
    event.preventDefault();
    // console.log("send form")
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function onTextareaInput(event) {
    const message = event.target.value;
    localStorage.setItem(STORAGE_KEY, message)
};

function savedTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        refs.textarea.value = savedMessage;
    }
}
