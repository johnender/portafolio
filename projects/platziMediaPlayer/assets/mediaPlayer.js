
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
  this.plugins = config.plugins || [];//el [] es por si no hay plugins

  this._initPlugins();//metodo para inicializar los plugins
}

//con arrow function no funciona
MediaPlayer.prototype.play = function() {
  this.media.play();
}

MediaPlayer.prototype.pause = function() {
  this.media.pause();
}

//play o pause a lo que esta en media actualmente
MediaPlayer.prototype.togglePlay = function() {
  if(this.media.paused){
    this.play();
  } else {
    this.pause();
  }
};

//inicializa cada plugin recibido
MediaPlayer.prototype._initPlugins = function() {
  this.plugins.forEach(plugin => {
    plugin.run(this);
  });
}

//metodo que mutea el video
MediaPlayer.prototype.mute = function() {
  this.media.muted = true;
}

//metodo que desmutea el video
MediaPlayer.prototype.unmute = function() {
  this.media.muted = false;
}

//metodo para mutear o desmutear
MediaPlayer.prototype.toggleMute = function() {
  this.media.muted = !this.media.muted
}
//module.exports = MediaPlayer;
export default MediaPlayer;