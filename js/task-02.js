const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = document.querySelector('#ingredients');

// ======= First version =============

const allListOfIngredient = [];

ingredients.forEach(ingredient => {
  const itemsOfList = document.createElement('li');
  itemsOfList.textContent = ingredient;
  itemsOfList.classList.add('item');

  allListOfIngredient.push(itemsOfList);
});

listOfIngredients.append(...allListOfIngredient);


// ======= Second version =============

// const allListOfIngredient = (ingredients => {
//   return ingredients.map(ingredient => {
//     const itemsOfList = document.createElement('li');
//     itemsOfList.textContent = ingredient;
//     itemsOfList.classList.add('item');
//     return itemsOfList;
//   });
// });

// const elements = allListOfIngredient(ingredients);

// listOfIngredients.append(...elements);



// ======= Third version =============

// const allListOfIngredient = ingredients
//   .map(ingredient => `<li class='item'>${ingredient}</li>`)
//   .join('');

// listOfIngredients.insertAdjacentHTML("afterbegin", allListOfIngredient);