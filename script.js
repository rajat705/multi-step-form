const form = document.getElementById("form");
const steps = Array.from(document.querySelectorAll(".step"));
const prevButtons = Array.from(document.querySelectorAll(".prev"));
const nextButtons = Array.from(document.querySelectorAll(".next"));
const summaryName = document.getElementById("summary-name");
const summaryEmail = document.getElementById("summary-email");
const summaryOption = document.getElementById("summary-option");

let currentStep = 0;

form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form submitted! You can handle the submission here.");
});

nextButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (validateStep(currentStep)) {
            steps[currentStep].classList.remove("active");
            currentStep++;
            steps[currentStep].classList.add("active");
        }
    });
});

prevButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        steps[currentStep].classList.remove("active");
        currentStep--;
        steps[currentStep].classList.add("active");
    });
});

function validateStep(step) {
    const inputs = steps[step].querySelectorAll("input, select");
    for (const input of inputs) {
        if (input.checkValidity() === false) {
            alert("Please fill out all required fields.");
            input.reportValidity();
            return false;
        }
    }
    return true;
}

form.addEventListener("input", function () {
    summaryName.textContent = document.getElementById("name").value;
    summaryEmail.textContent = document.getElementById("email").value;
    summaryOption.textContent = document.getElementById("option").value;
});
