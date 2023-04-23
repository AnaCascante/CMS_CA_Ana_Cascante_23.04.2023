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
