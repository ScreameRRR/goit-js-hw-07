// Task 1
const itemRef = document.querySelectorAll('.item'); // Знаходимо доступ до категорій
console.log(`В списке ${itemRef.length} категории.`); // Показуємо категорії

// Taks 2
const categoryList = itemRef.forEach((item) =>  {
    console.log(`Категория: ${item.firstElementChild.textContent}`); //Показуємо в консоль текст заголовка eлемента h2
    console.log(`Количество элементов: ${item.lastElementChild.children.length}`); // Показуємо в консоль кількість елементів у категорії
   }
)