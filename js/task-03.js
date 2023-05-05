const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('.gallery');


// ======= First version =============

const listOfItem = ({ url, alt }) => {
  return `<li class="item"><img src=${url} alt=${alt} class="images"></li>`   
}

const allListOfItem = images.map(listOfItem).join('');

galleryList.insertAdjacentHTML("afterbegin", allListOfItem)


// ======= Second version =============

// const allListOfItems = (images => {
//   return images.map(({ url, alt }) => {
//     const itemOfGallery = document.createElement('li');
//     itemOfGallery.classList.add('item');

//     const imageOfGallery = document.createElement('img');
//     imageOfGallery.src = url;
//     imageOfGallery.alt = alt;
//     imageOfGallery.classList.add('images');

//     itemOfGallery.append(imageOfGallery);

//     return itemOfGallery;
//   });
// });

// const elements = allListOfItems(images);

// galleryList.append(...elements);

