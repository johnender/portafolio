import MediaPlayer from './mediaPlayer.js'
//const MediaPlayer = require('./mediaPlayer.js')

const  video = document.querySelector("video")//agarrar el video para manipularlo, puede ser video, ya que es el unico elemento con esa etiqueta

const  button = document.querySelector("button")//agarrar el boton para manipularlo, es el unico, sino, por id




const  player = new  MediaPlayer({ el:  video });//se le envia el video actual
button.onclick = () =>  player.play();


video.onclick = () =>  player.play();//para que funcione tambien al tocar el video