import { registerImage } from "./lazy.js";
import { createImageNodes } from "./utils.js";

// Cargue las imagenes existentes cuando cargue la página
const allImages = document.querySelectorAll("img[data-src]");
allImages.forEach(registerImage);

// Agregar nuevas imagenes
const imageContainer = document.querySelector("#images");
const button = document.querySelector("button[type='submit']"); //busca el boton de agregar

button.addEventListener("click", () => {                        //agrega el evento al boton de agregar en click con arrow function (funcion anonima)
  const [node, image] = createImageNodes();                     //trae los elemento de contenedor e imagen
  registerImage(image);                                         //avisa al lazy plugin sobre la nueva imagen, enviando solo la imagen, no el contenedor
  imageContainer.append(node);                                  //agrega la imagen al DOM
});

// Limpiar
const clean = document.querySelector("button[type='reset']"); //busca boton del limiar

clean.addEventListener("click", () => {
  imageContainer.innerHTML = "";          //limpia el elemento padre
});
