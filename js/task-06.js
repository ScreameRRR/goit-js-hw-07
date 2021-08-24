const inputRef = document.querySelector("#validation-input"); // Беру посилання на input

const inputTextLength = e => {
    const currentNumber = Number(e.currentTarget.value.length); // Змінна яка бачить поточну довжину
    const inputNumber = Number(inputRef.dataset.length) // Довжина яка потрібна

    if(currentNumber===inputNumber) { // Провірка чи поточний номер сходиться з потрібним номером символів.
        inputRef.classList.remove("invalid") 
        inputRef.classList.add("valid") 
    } else {
        inputRef.classList.add("invalid"); 

    }
}
    
inputRef.addEventListener("input", inputTextLength);