const axios = require("axios");
const testForms = document.querySelectorAll(".form_js-validate");

window.formComponent = {
    init: () => {
        testForms.forEach((form) => {
            const fields = form.querySelectorAll("[data-validate]");
            formComponent.validationOnSubmit(fields, form);
            formComponent.validateOnEntry(fields, form);
        });
    },

    modelValidation: (validationFields, form) => {
        validationFields.forEach((field) => {
            formComponent.validateFields(field);
        });
        let checks = form.querySelector(".error:not(.hidden)");
        if (form.contains(checks)) {
            // here you can add some error msg or else ...
        } else {
            formSending();
        }
    },

    validationOnSubmit: (validationFields, form) => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            formComponent.modelValidation(validationFields, form);
        });
    },

    validateOnEntry: (validationFields, form) => {
        validationFields.forEach((field) => {
            field.addEventListener("input", (event) => {
                formComponent.validateFields(field);
            });
        });
    },

    validateFields: (input) => {
        const data = input.dataset.validate;

        if (~data.indexOf("no-empty")) {
            if (input.value.trim() === "") {
                formComponent.setStatus(input, "error");
            } else {
                formComponent.setStatus(input, "success");
            }
        }
        if (~data.indexOf("number")) {
            const numReg = /^\d+$/;
            if (numReg.test(input.value) && input.value.trim() !== "") {
                formComponent.setStatus(input, "success");
            } else {
                formComponent.setStatus(input, "error");
            }
        }
        if (~data.indexOf("email")) {
            const emailReg = /\S+@\S+\.\S+/;
            if (emailReg.test(input.value) && input.value.trim() !== "") {
                formComponent.setStatus(input, "success");
            } else {
                formComponent.setStatus(input, "error");
            }
        }

        if (~data.indexOf("select")) {
            if (input.value === "") {
                formComponent.setStatus(input, "error");
            } else {
                formComponent.setStatus(input, "success");
            }
        }
        if (~data.indexOf("checkbox")) {
            // console.log(input.checked);
            if (input.checked) {
                formComponent.setStatus(input, "success");
            } else {
                formComponent.setStatus(input, "error");
            }
        }

        if (~data.indexOf("phone")) {
            const phoneReg =
                /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm;
            if (phoneReg.test(input.value) && input.value.trim() !== "") {
                formComponent.setStatus(input, "success");
            } else {
                formComponent.setStatus(input, "error");
            }
        }
    },

    // set/remove class final fx
    setStatus: (field, status) => {
        const errorMessage = field.parentElement.querySelector(".error");

        // console.log(errorMessage);
        if (status === "success") {
            field.classList.remove("input-error");
            errorMessage.classList.add("hidden");
        }
        if (status === "error") {
            field.classList.add("input-error");
            errorMessage.classList.remove("hidden");
        }
    },
};

formComponent.init();



const tForm = document.querySelector('.some-form');

if(!!tForm){
    async function formSending() {
        let newFormData = new FormData(),
            action = tForm.action;

        // google captcha
        // winnerFormData.append(
        //     "g-recaptcha-response",
        //     document.getElementById("g-recaptcha-response-60edd5e3419e6").value
        // );


        newFormData.append("data", "some value");
        try {
            const response = await axios({
                method: "post",
                url: action,
                data: newFormData,
                headers: { "Content-Type": "multipart/form-data" },
            });

            if (response.data.errors) {
                // fn(response.data.errors);
            }
            // if all ok

        } catch (err) {
        } finally {
             // google captcha
            // const token = await grecaptcha.execute(
            //     recaptchaToken,
            //     { action: "home_form" }
            // );

            // document.getElementById(
            //     "g-recaptcha-response-60edd5e3419e6"
            // ).value = token;
        }
    }
}
