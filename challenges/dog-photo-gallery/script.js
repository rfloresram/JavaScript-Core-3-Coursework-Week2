//Write a function that makes an API call to `https://dog.ceo/api/breeds/image/random`

const btnElement1 = document.getElementById("randomImage");
const btnElement2 = document.getElementById("createNewImage");

const url = `https://dog.ceo/api/breeds/image/random`;

function randomImage() {
  fetch(url)
    .then((Response) => Response.json())
    .then(function (object) {
      let imagePath = object.message;
      let liElement = document.createElement("li");

      liElement.className = "p-2 mx-auto list-group-item";

      let imgElement = document.createElement("img");

      imgElement.src = imagePath;
      imgElement.className="w-100"

      // When the button is clicked it should make an API call to `https://dog.ceo/api/breeds/image/random`
      let ulElement = document.getElementById("gallery");
      for (let elem of ulElement.childNodes) {
        ulElement.removeChild(elem);
      }
      ulElement.appendChild(liElement);
      liElement.appendChild(imgElement);
    })
    .catch((error) => console.log(error));
}

function createNewImage() {
  fetch(url)
    .then((Response) => Response.json())
    .then(function (object) {
      let imagePath = object.message;
      let liElement = document.createElement("li");
      liElement.className = "p-2";

      let imgElement = document.createElement("img");
      imgElement.src = imagePath;

      //When the button is clicked it should make an API call to `https://dog.ceo/api/breeds/image/random`
      let ulElement = document.getElementById("gallery");
    
      ulElement.appendChild(liElement);
      liElement.appendChild(imgElement);
    })

    //Incorporate error handling
    .catch((error) => console.log(error));
}

btnElement1.addEventListener("click", randomImage);
btnElement2.addEventListener("click", createNewImage);