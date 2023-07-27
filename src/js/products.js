const prodPage = document.querySelector('.third-page');
const purchaseHeader = document.querySelector('.purchase-headers');
const allProducts = document.querySelector('.products');
const prod1 = document.querySelector('.img1');
const prod2 = document.querySelector('.img2');
const prod3 = document.querySelector('.img3');
const prod4 = document.querySelector('.img4');
const prod5 = document.querySelector('.img5');
const prod6 = document.querySelector('.img6');
const prod7 = document.querySelector('.img7');
const prod8 = document.querySelector('.img8');

const clothesApi = 'https://fakestoreapi.com/products';

//Fetching api
fetch(clothesApi)
  .then((res) => res.json())
  .then((data) => {});

//Including three dots in the css page and also
//add one more row of photos
//Hold products in a array of objects and map through them
//to get the desired products, then
