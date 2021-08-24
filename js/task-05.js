const inputRef = document.querySelector("#name-input"); // Беру посилання на input
const nameRef = document.querySelector("#name-output"); // Беру посилання на span с іменем

const changeName = e => {
nameRef.textContent = e.currentTarget.value || 'незнакомец'; // Функція яка міняє текст в span іншим текстом, який був введений в інпуті
}

inputRef.addEventListener("input", changeName); 