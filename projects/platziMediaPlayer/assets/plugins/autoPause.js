class AutoPause{
  constructor(){
    this.threshold = 0.25
    this.handleInterseption = this.handleInterseption.bind(this)//hace permanente el this a la instancia del handle
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
  }
  run(player){
    this.player = player //instanciando el player para poder usarlo en los metodos de la clase


    //al observer se le pasa el handle y un objetio de configuracion
    const observer = new IntersectionObserver(this.handleInterseption, {
      threshold: this.threshold,  //threshold significa umbral
    })

    observer.observe(this.player.media)//para que el observer comience a observar el video



    //revisa si el usuario esta viendo la pagina, se le pasa el nombre del evento y la funcion a ejecutar
    document.addEventListener("visibilitychange", this.handleVisibilityChange);



  }

  //para hacer el handle en un metodo
  handleInterseption(entries){//entries es una lista de los objetos que se estan observando
    const entry = entries[0]

    //se revisa si el video esta saliendo o entrando
    const isVisible = entry.intersectionRatio > this.threshold;

    if (isVisible){
      this.player.play();
    }else{
      this.player.pause();
    }

    console.log(entry)
  }


  //si el usuario ve, play, si no, pause
  handleVisibilityChange(){
    const isVisible = document.visibilityState === "visible";
    if(isVisible){
      this.player.play()
    }else{
      this.player.pause()
    }
  }
}

export default AutoPause;