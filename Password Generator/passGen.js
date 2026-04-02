const passwordBox = document.getElementById("password");
const length = 15;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

const button = document.querySelector("button");
button.addEventListener("click", generatePassword);

const copyButton = document.getElementById("copyButton");
copyButton.addEventListener("click", copyPassword);

function generatePassword(){
    let password = "";
    const allCharacters = uppercase + lowercase + numbers + symbols;

    for(let i=0; i<length; i++){
        const randomIndex = Math.floor(Math.random()*allCharacters.length); // This line geneates a random index in the range of the length of the allCharacters string.
        password += allCharacters[randomIndex];
    }
    passwordBox.value = password; // This line sets the value of the passwordBox input field to the generated password, allowing the user to see and copy it.
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy"); // This line executes the "copy" command, which copies the selected text (the generated password) to the clipboard.
    alert("Password copied to clipboard!");
}

