function autoplay(){

}

//metodo para inicializar el plugin
//recibe una instancia del media player
autoplay.prototype.run = function(player) {
  player.mute();//excepcion para poder reproducir autmaticamente, el video debe estar en mute
  player.play();
}

export default autoplay;