const counterRefs = { 
decrementRef : document.querySelector('button[data-action="decrement"]'),
incrementRef : document.querySelector('button[data-action="increment"]'),
valueRef : document.querySelector("#value"),
} // Беру посилання на кнопки та рахунок

const{decrementRef, incrementRef, valueRef} = counterRefs; 

const handleButtonClickDecrement = event => {
    valueRef.textContent = Number(valueRef.textContent) - 1;
} // функція яка замінює рахунок на -1

const handleButtonClickIncrement = event => {
    valueRef.textContent = Number(valueRef.textContent) + 1;
} // функція яка замінює рахунок на +1
    
decrementRef.addEventListener('click', handleButtonClickDecrement); // добавив слухача який при кліку викликає дію -1
incrementRef.addEventListener('click', handleButtonClickIncrement); // добавив слухача який при кліку викликає дію +1