import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
let data = {
    input: document.querySelector("input"),
    textarea: document.querySelector("textarea")
}

const STORAGE_KEY = "feedback-form-state";

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

form.addEventListener("input", throttle(event => {   
    formData[event.target.name] = event.target.value;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
    
}, 500));

savedText();

function savedText() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    
    if (savedData) {
        data.input.value = savedData.email || "";
        data.textarea.value = savedData.message || "";
            
    }
}

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    if (!(data.input.value === "") && !(data.textarea.value === "")) {
        event.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY);
        formData = {};
    }
    
};









