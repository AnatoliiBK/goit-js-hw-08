// import throttle from "lodash.throttle";

// const refs = {
//     form: document.querySelector(".feedback-form"),
//     textarea: document.querySelector(".feedback-form textarea")
// };

// const STORAGE_KEY = "feedback-form-state";

// const formData = {}

// refs.form.addEventListener("submit", onFormSubmit);
// refs.textarea.addEventListener("input", throttle(onTextareaInput, 500));

// refs.form.addEventListener("input", event => {   
//     formData[event.target.name] = event.target.value;
//     console.log(formData);
// });

// savedTextarea();

// function onFormSubmit(event) {
//     event.preventDefault();
//     // console.log("send form")
//     event.currentTarget.reset();
//     localStorage.removeItem(STORAGE_KEY);
// };

// function onTextareaInput(event) {
//     const message = event.target.value;
//     localStorage.setItem(STORAGE_KEY, message)
// };

// function savedTextarea() {
//     const savedMessage = localStorage.getItem(STORAGE_KEY);
//     if (savedMessage) {
//         refs.textarea.value = savedMessage;
//     }
// }




// const refs = {
//     form: document.querySelector(".feedback-form"),
//     textarea: document.querySelector(".feedback-form textarea")
// };

import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
let data = {
    input: document.querySelector("input"),
    textarea: document.querySelector("textarea")
}
console.log(data)
const STORAGE_KEY = "feedback-form-state";

const formData = {};

form.addEventListener("input", throttle(event => {   
    formData[event.target.name] = event.target.value;
    console.log(formData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
    console.log(JSON.stringify(formData))
    
}, 500));

savedText();

function savedText() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(savedData)
    if (savedData) {
        data.input = savedData.email;
        data.textarea = savedData.message
        // data = savedData
        
        console.log(data)
    }
}

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    // console.log("send form")
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};






// function onTextareaInput(event) {
//     const message = event.target.value;
//     localStorage.setItem(STORAGE_KEY, message)
// };


