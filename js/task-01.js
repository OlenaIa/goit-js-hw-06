const listOfCategoriesRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${listOfCategoriesRef.length}`);

listOfCategoriesRef.forEach(element => {
    const titleRef = element.querySelector('h2');
    console.log(titleRef.textContent);

    const listOfItemsInCategory = element.querySelectorAll('li');
    console.log(`Elements: ${listOfItemsInCategory.length}`);
});