console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");


//qkXaSnkzDXyyZYmMwMniiLetwvDsRfCX - giphy sdk key
//qkXaSnkzDXyyZYmMwMniiLetwvDsRfCX - giphy api key

let subBtn = document.querySelector("#submitSearch");
let searchString = document.querySelector("#searchWord");
let img = document.querySelector("#imageContainer > img");
let pFeedBack = document.querySelector("#feedBack");

subBtn.addEventListener("click", (event) => {

})

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");


const GIF_URL = "https://api.giphy.com/v1/gifs/translate";
const GIF_KEY = "qkXaSnkzDXyyZYmMwMniiLetwvDsRfCX";

subBtn.addEventListener("click", (event) => {

    fetch(`${GIF_URL}?api_key=${GIF_KEY}&s=${searchString.value}`)
        .then((response) => {
            //console.log(response.json());
            return response.json();
        })
        .then((body) => {
            //console.log(body);
            img.src = body.data.images.original.url;
            searchString.value = "";
            pFeedBack.textContent = "";

        }) 
        .catch((err) => {
            console.error(err);
            img.src = "";
            pFeedBack.textContent = err;
        })
})

