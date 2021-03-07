const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";


const doggos = document.querySelector(".doggos");

function addNewDog(){
    const loading = document.createElement("img");
    loading.src = "../images/loading.gif";
    doggos.appendChild(loading);
const promise = fetch(BREEDS_URL);
promise
    .then(function(response){
        const processingPromise = response.json();
        return processingPromise;
    })
    .then(function(processedResponse){
        const img = document.createElement("img");
        img.src = processedResponse.message;
        img.alt = "Dog pic";
        doggos.appendChild(img);
        doggos.removeChild(loading);
    });
    
}

document.querySelector('.add-dog').addEventListener('click', addNewDog);