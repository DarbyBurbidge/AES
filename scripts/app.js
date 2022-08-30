
import { runAES } from "./aes.js";

const messageInput = document.getElementById("message__input");
const inputForm = document.getElementById("input__form");
const outputContainer = document.getElementById("output__container");


inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const decryptButton = document.getElementById("decrypt");
    const decrypt = decryptButton.checked;
    let message = messageInput.value
    let tempMessage = []
    let newMessage = []
    if (decrypt) {

        tempMessage = message.split(' ')
        for(let i = 0; i < message.length;i++) {
            newMessage[i] = parseInt(tempMessage[i], 16)
        }
        console.log(message)
    } else {
        newMessage = message
    }
    const outputMessage = runAES(newMessage, decrypt);
    outputContainer.innerText = outputMessage;
});
