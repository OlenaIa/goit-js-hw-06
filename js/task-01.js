const listOfCategoriesRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${listOfCategoriesRef.length}`);

listOfCategoriesRef.forEach(element => {
   console.group('Category:', element.firstElementChild.textContent);
    console.log('Number of elements:', element.lastElementChild.children.length);
console.groupEnd();
});









// const bodyRef = document.body;
// const listRef = bodyRef.children;
// const ulMainRef = listRef[1];

// const listOfCategoriesRef = ulMainRef.children;
// console.log(`Number of categories: ${listOfCategoriesRef.length}`);


