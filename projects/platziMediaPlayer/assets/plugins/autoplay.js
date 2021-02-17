function autoplay(){

}

//metodo para inicializar el plugin
//recibe una instancia del media player
autoplay.prototype.run = function(player) {
  if(!player.muted)
    player.muted = true;
    //el setter no es una funcion y no se llama como una, solo son un valor
    //player.mute(true);//excepcion para poder reproducir autmaticamente, el video debe estar en mute
  player.play();
}

export default autoplay;