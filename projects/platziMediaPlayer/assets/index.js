
//const MediaPlayer = require('./mediaPlayer.js')
import MediaPlayer from './mediaPlayer.js';
import AutoPlay from './plugins/autoplay.js'

const video = document.querySelector("video")//agarrar el video para manipularlo, puede ser video, ya que es el unico elemento con esa etiqueta

const playButton = document.querySelector("#playButton")//agarrar el boton para manipularlo, es el unico, sino, por id

const muteButton = document.querySelector("#muteButton")


//const  player = new  MediaPlayer({ el:  video });//se le envia el video actual
const  player = new  MediaPlayer({ el:  video, plugins: [
  new AutoPlay()
] });//se le envia el video actual

playButton.onclick = () =>  player.togglePlay();


video.onclick = () =>  player.togglePlay();//para que funcione tambien al tocar el video


muteButton.onclick = () => player.toggleMute();



/**
 * Prueba importante
 * se pasa el Nodeliste como contexto del array mediante call, entonces se tienen las funciones de los array
 */
const testButton = document.getElementsByClassName("test");

Array.prototype.forEach.call(testButton, element => {
  element.onclick = () => alert("Test seccessful!");
});






/*
//IIFE, function that is called inmediatly, sorrounded by ()
(function() {
  let color = "green";

  function printColor() {
    console.log(color);
  }

  printColor();
})();*/




/**
 * Closure example, privade variable
 */
/*
function makeCounter(n){
  let count = n;
  return {
    increase: function() {count++;},
    decrease: function() {count--;},
    getCount: function() {return count;}
  };
}
let counter = makeCounter(5);
counter.increase();
console.log(counter.getCount());*/










/**
 * Ejemplo uso de proxy
 */
/*
const dialogosRamirez = {
  accion: "Para saber si es cocaina enviaremos una muestra al laboratorio",
  sugerencia: "¿Seguro no quiere esperar a los analisis de laboratorio?",
  pregunta: "¿Y supo si era o no cocaina?"
}

const dialogosComandante = {
  get(obj, prop) {
    switch (prop) {
      case "accion":
      console.log(obj[prop])  
      console.log("Que muestra ramirez que muestra?")
        break
      case "sugerencia":
      console.log(obj[prop])  
      console.log("Ahorita vemos que onda... ahorita vemos que pe...")
        break
      case "pregunta":
      console.log(obj[prop])  
      console.log("Nel... no es coca... es harina... ay papaya de celayaaaa, ay papantla tus hijos vuelan!!! VAMONOS PE...!!!")
        break
      default:
        console.log("Que se armen los p$%·% ch%&/zos!!! PUM!!!!")
        break
    }

    return obj[prop]
  }
}

const oficialRamirez = new Proxy(dialogosRamirez, dialogosComandante);
oficialRamirez.accion
oficialRamirez.sugerencia
oficialRamirez.pregunta
*/