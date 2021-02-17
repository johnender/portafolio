
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

//usa prototype para heredar this de MediaPlayer
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

  //objeto para establecer cuanto acceso tienen los plugins, para no pasar todo el MediaPlayer(this)
  const player = {
    play: () => this.play(),
    pause: () => this.pause(),
    media: this.media, //para poder llamarlo en el getter

    //creando una propiedad virtual con getter
    get muted() {
      return this.media.muted;
    },

    set muted(value){
      this.media.muted = value;
      /*
      if (value ===true)
        this.media.muted = true;
      else 
        this.media.muted = false;
        */
    }

  }
  this.plugins.forEach(plugin => {
    plugin.run(player);//antes se pasaba this, ahora el objeto limitado
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