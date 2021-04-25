let totalImages = 0;
let loadedImages = 0;

//resive un entry como parametro, al ser parte de la web API del intersectionObserver tiene la propiedad isIntersecting y otras.
const isIntersecting = (intersectionEntry) => intersectionEntry.isIntersecting;


//el intersectionObserver avisa cuando un elem ento es visto en la pantalla (puede ir por porcentajes)
const observer = new IntersectionObserver((entries) => {  //entries son los valores que esta escuchando
  entries
    .filter(isIntersecting) //solo revisa las imagenes que esten interceptando el viewport
    .forEach(loadImage);    //funcion a ejecutar por el observer
});

//metodo que se llama cada vez que un evento en observacion (una entry) sale en la pantalla, trae el entry como parametro
const loadImage = (intersectionEntry) => {   
  const imgNode = intersectionEntry.target; //nodo en observacion
  imgNode.src = imgNode.dataset.src;        //carga la imagen, segun la info del dataset
  imgNode.onload = () => {
    loadedImages += 1;
    logState(); //imprime los valores actuales
  };
  observer.unobserve(imgNode);    //elimina el evento de observar
};

//metodo que se llama en el index.js, al recibir una imagen le pide al observer que la observe
export const registerImage = (image) => {
  observer.observe(image);  //pasa como entry para el observer
  totalImages += 1;
  logState(); //imprime los valores actuales
};

function logState() {
  console.log(`⚪️ Total Imágenes: ${totalImages}`);
  console.log(`🟣 Imágenes cargadas: ${loadedImages}`);
  console.log("--------------------------------------");
}
