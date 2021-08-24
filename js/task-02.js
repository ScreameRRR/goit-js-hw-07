const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector("#ingredients"); // спочатку отримуємо ссилку на Інгрідієнти


const ingredientsList = ingredients => { // далі робимо перемінну, яка буде перебирати масив, створювати li та вставляти текст
  return ingredients.map(item => { // перебір
      const list = document.createElement("li"); // створення li на кожній іттерації
      list.textContent = item; // запис тексту в li
      return list;
    })
  }


const ingredientsMarkup = ingredientsList(ingredients); // тепер вставляємо усі створенні li в ul
  ingredientsRef.append(...ingredientsMarkup);