
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