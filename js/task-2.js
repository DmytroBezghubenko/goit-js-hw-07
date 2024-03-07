const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const list = document.querySelector(".gallery");
const markup = images
  .map((img) => `<li class="list-item new"><img src="${img.url}" alt="${img.alt}" /></li>`)
  .join("");
list.insertAdjacentHTML("afterbegin", markup);
  

list.style.display = 'flex';
list.style.listStyleType = 'none';
list.style.padding = '0';

const listItems = document.querySelectorAll('.list-item');
listItems.forEach(item => {
  item.style.marginRight = '10px';
});

const imagesInGallery = document.querySelectorAll('.gallery img');
imagesInGallery.forEach(image => {
  image.style.width = '300px';
  image.style.height = 'auto';
});