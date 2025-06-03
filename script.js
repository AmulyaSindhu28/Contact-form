const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", (event) => {
    // Prevent form submission
    event.preventDefault();

    // Clear success message
    successMessage.textContent = "";

    // Validate inputs
    const isNameValid = validateInput(nameInput, "Name cannot be empty.");
    const isEmailValid = validateEmail(emailInput);
    const isMessageValid = validateInput(messageInput, "Message cannot be empty.");

    // If all inputs are valid, show success message
    if (isNameValid && isEmailValid && isMessageValid) {
        successMessage.textContent = "Form submitted successfully!";
        form.reset();
    }
});

function validateInput(inputElement, errorMessage) {
    const errorElement = inputElement.nextElementSibling;
    if (inputElement.value.trim() === "") {
        errorElement.textContent = errorMessage;
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
}

function validateEmail(inputElement) {
    const errorElement = inputElement.nextElementSibling;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (inputElement.value.trim() === "") {
        errorElement.textContent = "Email cannot be empty.";
        return false;
    } else if (!emailRegex.test(inputElement.value.trim())) {
        errorElement.textContent = "Enter a valid email address.";
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
}
