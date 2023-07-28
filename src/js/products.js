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
const prod9 = document.querySelector('.img9');
const prod10 = document.querySelector('.img10');
const prod11 = document.querySelector('.img11');
const prod12 = document.querySelector('.img12');

const clothesApi = 'https://fakestoreapi.com/products';

//Fetching api
// fetch(clothesApi)
//   .then((res) => res.json())
//   .then((data) => {});

//Including three dots in the css page and also
//add one more row of photos
//Hold products in a array of objects and map through them
//to get the desired products, then
const fetchForever21Prod = async () => {
  const url =
    'https://apidojo-forever21-v1.p.rapidapi.com/products/search?query=jackets&rows=60&start=0&color_groups=black';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1ca3eb09d6msh19213a44af860d6p1eb6cejsnde8c57a347d0',
      'X-RapidAPI-Host': 'apidojo-forever21-v1.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    let photo = result.response.docs[1].thumb_image;
    let photo2 = result.response.docs[2].thumb_image;
    prod2.src = photo2;
    let photo3 = result.response.docs[3].thumb_image;
    prod3.src = photo3;
    let photo4 = result.response.docs[4].thumb_image;
    prod4.src = photo4;
    let photo5 = result.response.docs[5].thumb_image;
    prod5.src = photo5;
    let photo6 = result.response.docs[6].thumb_image;
    prod6.src = photo6;
    let photo7 = result.response.docs[7].thumb_image;
    prod7.src = photo7;
    let photo8 = result.response.docs[8].thumb_image;
    prod8.src = photo8;
    // let photo9 = result.response.docs[9].thumb_image;
    // prod9.src = photo9;
    // let photo10 = result.response.docs[10].thumb_image;
    // prod10.src = photo10;
    // let photo11 = result.response.docs[11].thumb_image;
    // prod11.src = photo11;
    // let photo12 = result.response.docs[12].thumb_image;
    // prod12.src = photo12;

    console.log(photo);
    console.log(result);
    prod1.src = photo;
  } catch (error) {
    console.error(error);
  }
};

fetchForever21Prod();

const fetchAsosFootWear = async () => {
  const url =
    'https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1ca3eb09d6msh19213a44af860d6p1eb6cejsnde8c57a347d0',
      'X-RapidAPI-Host': 'asos2.p.rapidapi.com',
    },
  };

  // fetch(url)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data.json());
  //   });

  try {
    const response = await fetch(url, options);
    const data = await response.json();
  } catch (error) {
    console.error(error);
  }
};

fetchAsosFootWear();
