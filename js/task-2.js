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
  {
    url:
      'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url:
      'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url:
      'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
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
list.style.flexWrap = 'wrap';
list.style.rowGap = '48px';
list.style.columnGap = '24px';
list.style.maxWidth = '1128px'
list.style.marginLeft = 'auto';
list.style.marginRight = 'auto';
list.style.justifyContent = 'center';

const sizePhoto = document.querySelectorAll("img");
sizePhoto.forEach(phot => {
  phot.style.width = '360px';
  phot.style.height = '300px';
  phot.style.objectFit = 'cover';
});

