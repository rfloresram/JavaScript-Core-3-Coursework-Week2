
// Inside the same file write a program that gets the `json` using Fetch.

//A function should make an API call to the given endpoint: `https://xkcd.now.sh/?comic=latest`
fetch("https://xkcd.now.sh/?comic=latest")

  .then((response) => response.json())
  .then(function (data) {
    console.log(data);
  //Log the received data to the console

    let container = document.getElementsByTagName("body")[0];
    //Render the `img` property into an `<img>` tag in the DOM

    let image = document.createElement("img");
    image.src = data.img;
    container.appendChild(image);
  })

  //Incorporate error handling
  .catch((error) => {
    console.error("Error:", error);
  });