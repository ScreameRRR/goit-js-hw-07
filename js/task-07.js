const inputRef = document.querySelector("#font-size-control"); // Беру посилання на input
const textRef = document.querySelector("#text"); // Беру посилання на text

const changeTextSize = e => {
  textRef.style.fontSize = inputRef.value +"px"; // тут просвоюю розмір текста значення рівне значенню повзунка
}

inputRef.addEventListener("input", changeTextSize)