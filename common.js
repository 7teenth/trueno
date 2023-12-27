"use strict"

let message = document.querySelector('span.message');
let inputs = document.querySelectorAll('form > input[type="text"], form > input[type="password"]');
let submitBtn = document.querySelector('form > input[type="submit"]');

const isValidate = (e) => {

    switch (e.target.getAttribute("type")) {
        case "text":
            return Boolean(e.target.value.match("@gmail.com"));
        case "password":
            return e.target.value.length >= 6;
    }

}

for (let input of inputs) {
    input.addEventListener('change', (e) => {
        console.log(isValidate(e));
        if (!isValidate(e)) {
            message.removeAttribute("hidden");
            submitBtn.setAttribute("disabled", "");
        } else {
            message.setAttribute("hidden", "");
            submitBtn.removeAttribute("disabled");
        }
    });
}


submitBtn.addEventListener('click', (e) => {
    if(inputs[1].value !== inputs[2].value) {
        e.preventDefault();
        alert("Password not equals!");
    }
});
