
/*//ejemplo manejando una funcion prototipada
function  MediaPlayer(){}//es un objeto, la forma de manejar clases en JS
MediaPlayer.prototype.play = function() {

  video.play();//el video esta embebido

}
const  player = new  MediaPlayer();
button.onclick = () => player.play();//reproducir el video*/


//ejemplo con funcion mas extensible
function  MediaPlayer(config) {//coloca el video que resive como el media actual
  this.media = config.el;
}

MediaPlayer.prototype.play = function() {//play o pause a lo que esta en media actualmente
  if(this.media.paused){
    this.media.play();
  } else {
    this.media.pause();
  }
};

//module.exports = MediaPlayer;
export default MediaPlayer;