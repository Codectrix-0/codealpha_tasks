const password = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const strengthText = document.getElementById("strengthText");
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}<>?/";
lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});
function generatePassword() {

    let characters = "";
    let generatedPassword = "";

    if (uppercase.checked) {
        characters += upperChars;
    }

    if (lowercase.checked) {
        characters += lowerChars;
    }

    if (numbers.checked) {
        characters += numberChars;
    }

    if (symbols.checked) {
        characters += symbolChars;
    }

    if (characters === "") {
        alert("Please select at least one option!");
        return;
    }

    for (let i = 0; i < lengthSlider.value; i++) {

        const randomIndex = Math.floor(Math.random() * characters.length);

        generatedPassword += characters[randomIndex];

    }

    password.value = generatedPassword;

    checkStrength();
}
copyBtn.addEventListener("click", () => {

    if (password.value === "") {
        return;
    }

    navigator.clipboard.writeText(password.value);

    alert("Password Copied!");
});
function checkStrength() {

    let strength = 0;

    if (uppercase.checked) strength++;
    if (lowercase.checked) strength++;
    if (numbers.checked) strength++;
    if (symbols.checked) strength++;

    if (lengthSlider.value >= 16) {
        strength++;
    }

    if (strength <= 2) {

        strengthText.textContent = "Weak";
        strengthText.style.color = "red";

    }
    else if (strength <= 4) {
        strengthText.textContent = "Medium";
        strengthText.style.color = "orange";

    }
    else {
        strengthText.textContent = "Strong";
        strengthText.style.color = "green";

    }
}
generateBtn.addEventListener("click", generatePassword);
generatePassword();