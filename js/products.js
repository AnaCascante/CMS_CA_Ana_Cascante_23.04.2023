const url = "https://rainydays23.learnbydoing.online/wp-json/wc/v3/products?consumer_key=ck_5b2f1b6385882b988fb35f7f38bf14bf86d6aa6d&consumer_secret=cs_02b1bd81b12cd16f34e0e4fb0173b40205ca12a2";

const productContainer = document.querySelector(".products");

async function getProducts() {
    try {
        const response = await fetch(url);
        const result = await response.json();
        createHTML(result);
    }

    catch(error) {
        console.log(error);
    }
}

getProducts();

    function createHTML(result){
        for(let i = 0; i < result.length; i++) {
            const list = result[i];

        
});``

/* for fetching a single product*/

fetch('https://rainydays23.learnbydoing.online/wp-json/wp/v2/products/{product_id}')
  .then(response => response.json())
  .then(product => console.log(product))
  .catch(error => console.error(error));


  /* creating a functionality to render a grid of product data in HTML as thumbnails */

fetch('https://rainydays23.learnbydoing.online/wp-json/wp/v2/products')
  .then(response => response.json())
  .then(products => {
    const container = document.getElementById('product-grid');

    // Loop through the products array and create a thumbnail for each product
    products.forEach(product => {
     
      const thumbnail = document.createElement('a');
      thumbnail.classList.add('product-thumbnail');
      thumbnail.href = product.link;

      // Create an image element and set its src and alt attributes
      const image = document.createElement('img');
      image.src = product.image.src;
      image.alt = product.image.alt;

      // Create a title element and set its text content
      const title = document.createElement('h1');
      title.textContent = product.title.rendered;

      // Append the image and title elements to the thumbnail element
      thumbnail.appendChild(image);
      thumbnail.appendChild(title);

      // Append the thumbnail element to the container element
      container.appendChild(thumbnail);
    });
  })
  .catch(error => console.error(error));