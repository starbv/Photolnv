"use strict"

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form1');
    form.addEventListener('submit', formSend);
    let formReq = document.querySelectorAll('._req');
    let error = false;

    const regExpName = /^[a-z0-9_-]{3,16}$/;
    const regExpPass = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;


    const submit = () => {
        alert("The data has been sent");
        if (!regExpPass.test(input.value) && input.value !== "") {
            input.nextElementSibling.textContent =
                "Please enter correct password";
            error = false;
        } else {
            input.nextElementSibling.textContent = "";
            error = true;
        }
    };

    const validateInput = (input) => {
        switch (input.name) {
            case ("username"):
                if (!regExpName.test(input.value) && input.value !== "") {
                    input.nextElementSibling.textContent =
                        "Please enter a valid username";
                    error = false;
                } else {
                    input.nextElementSibling.textContent = "";
                    error = true;
                }
                break;
            case ("password"):
                if (!regExpPass.test(input.value) && input.value !== "") {
                    input.nextElementSibling.textContent =
                        "Please enter correct password";
                    error = false;
                } else {
                    input.nextElementSibling.textContent = "";
                    error = true;
                }
                break;

        }

    };

    async function formSend(e) {
        e.preventDefault();
        formValidate(form);
        if (error) {
            submit();
            form.reset();
        }
        else {
            alert('Fill in the fields');
        }
    }

    for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        if (!input.classList.contains('form-check') && input.tagName != "BUTTON") {

            input.addEventListener("blur", () => {
                validateInput(input);
            });
        }
    }

    function formValidate(form) {
        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            if (!input.classList.contains('form-check') && input.tagName != "BUTTON") {

                if (input.value === '') {
                    input.nextElementSibling.textContent = "Please enter data";
                    error = false;
                }
                else {
                    input.nextElementSibling.textContent = "";
                    error = true;
                }
            }

        }

    }

});