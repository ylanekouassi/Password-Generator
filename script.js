const passwordGenerator = document.getElementById("password")
const passwordLength = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=!?";
const result = upperCase + lowerCase + number + symbol;

function createPassword(event) {
    event.preventDefault();
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (passwordLength > password.length) {
        password += result[Math.floor(Math.random() * result.length)];
    }

    passwordGenerator.value = password;

}

function copyPassword() {
    passwordGenerator.select();
    navigator.clipboard.writeText(passwordGenerator.value);
}