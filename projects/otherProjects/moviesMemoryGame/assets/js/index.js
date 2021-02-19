
//needed key for this API
const apiKey = 'b89fc45c2067cbd33560270639722eae';

//API link
const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;

class memoryGame {
	constructor() {
		this.NumerosAPI = new Array()
		this.tarjetas = new Array()
		this.NivelActual
		this.CuadrosNivel = [10]
		this.SeleccionadaUNO
		this.SeleccionadaDOS
		this.NTarjetasSeleccionadas = 0
		this.ContadorVictoria = 0
		this.movimientos = 0
		this.containerCargando = document.getElementById('loading')
		this.containerMovimientos = document.getElementById('movements')
		this.container = document.getElementById('game')
		this.time = true
		this.dataAPI = {
			loading: true,
			error: null,
			data: {
				info: {},
				results: []
			}
		}
		//counter values
		this.primermovimiento = false
		this.hora = 0
		this.minutos = 0
		this.segundos = 0
		this.decimales = 0
		this.tiempo = ''
		this.stop = true
	}

  //bring the data from the API
	fetchCharacters = async () => {
		this.dataAPI = { loading: true, error: null }
		try {
			const response = await fetch(url)
			const data = await response.json()
			this.dataAPI = {
				loading: false,
				data: {
					info: data.info,
					results: data.results
				}
			}
		} catch (error) {
			this.dataAPI = { loading: false, error: error }
		}
	}

  //load data and start game
  async iniciarJuego(){
    await this.loadGame()
    this.startGame()
  }

  //load the info from the API
  async loadGame(){
    this.NivelActual = 0
		this.elegirtarjeta = this.elegirtarjeta.bind(this)
		await this.fetchCharacters()
  }

  //calc the random posters to use and put it into cards
	startGame() {

    //restat every counter, in case the game is not the first one
    this.ReiniciarTiempo()
    this.NTarjetasSeleccionadas = 0
    this.primermovimiento = false
    this.reiniciarMovimientos()
    this.ContadorVictoria = 0


    this.NumerosAPI = []
		for (let i = 0; i < 20; i++) {
			this.NumerosAPI.push(i)
		}

		this.NumerosAPI = this.NumerosAPI.sort(function() {
			return Math.random() - 0.5
		})

		this.NumerosAPI.length = 10

    const LengthStatic = this.NumerosAPI.length

		for (let i = 0; i < LengthStatic; i++) {
			this.NumerosAPI.push(this.NumerosAPI[i])
		}

		this.tarjetas.length = this.NumerosAPI.length

		this.NumerosAPI = this.NumerosAPI.sort(function() {
			return Math.random() - 0.5
		})

      // for (let i = 0; i < this.NumerosAPI.length; i++){
      //   console.log(this.NumerosAPI[i])
      // }

    //limpiar pantalla antes de agregar las tarjetas
    this.container.innerHTML = ''; 
		for (let i = 0; i < this.tarjetas.length; i++) {
			this.PersonajeTemporal = {}

      let number = this.NumerosAPI[i]
      //console.log(this.dataAPI.data.results[number].id)
      this.PersonajeTemporal = this.dataAPI.data.results[number]
			this.tarjetas[i] = document.createElement('div')
			this.tarjetas[i].classList.add('tarjeta')
			this.tarjetas[i].innerText = this.NumerosAPI[i]
			this.tarjetas[i].setAttribute('data-position', i)
			this.tarjetas[i].addEventListener('click', this.elegirtarjeta)
			this.tarjetas[i].innerHTML =
				'<div class="front vueltaFront" data-position="' +
				i +
				'"></div><div class="back vueltaBack" data-position="' +
				i +
				`" style="background-image: url(	https://image.tmdb.org/t/p/w342${this.PersonajeTemporal.poster_path}		);">` +
				'' +
				'</div>'
			this.container.appendChild(this.tarjetas[i])
		}
		this.containerCargando.style.display = 'none'
		this.container.style.display = 'flex'
	}

  //add event listener property for the cards in game
	agregarEventos(n) {
		this.tarjetas[n].addEventListener('click', this.elegirtarjeta)
	}

  //remoce event listener property for the cards out of the game
	eliminarEventos(n) {
		this.tarjetas[n].removeEventListener('click', this.elegirtarjeta)
	}

  //choose card, first move estar counter
  //case 1, rotate card
  //case 2, compare the selected cards 
	elegirtarjeta(e) {
		if (this.time === true) {
			switch (this.NTarjetasSeleccionadas) {
				case 0:
					if (!this.primermovimiento) {
						this.IniciarCronometro()
					}
					this.primermovimiento = true
					this.SeleccionadaUNO = e.target.dataset.position
					this.tarjetas[this.SeleccionadaUNO].classList.add('rotar')
					this.eliminarEventos(this.SeleccionadaUNO)
					this.NTarjetasSeleccionadas++
					this.movimientos++
					this.containerMovimientos.innerText = `Moves: ${this.movimientos}`
					break
				case 1:
					this.movimientos++
					this.containerMovimientos.innerText = `Moves: ${this.movimientos}`
					this.SeleccionadaDOS = e.target.dataset.position
					this.tarjetas[this.SeleccionadaDOS].classList.add('rotar')
					if (
						this.NumerosAPI[this.SeleccionadaUNO] ===
						this.NumerosAPI[this.SeleccionadaDOS]
					) {
						console.log('correcto')
						this.eliminarEventos(this.SeleccionadaDOS)
						this.ContadorVictoria++
						if (this.ContadorVictoria === this.CuadrosNivel[this.NivelActual]) {
							setTimeout(() => {
								this.victoria()
							}, 1000)
						}
					} else {
						console.log('incorrecto')
						this.time = false
						setTimeout(() => {
							this.tarjetas[this.SeleccionadaUNO].classList.remove('rotar')
							this.tarjetas[this.SeleccionadaDOS].classList.remove('rotar')
							this.time = true
						}, 1000)
						this.agregarEventos(this.SeleccionadaUNO)
					}
					this.NTarjetasSeleccionadas = 0
					break
			}
		}
	}

  //create modal to show data of the game in winning
	victoria() {
		this.PausarTiempo()
		swal(
			'You won!',
			`Moves: ${this.movimientos} \n\n Time: ${this.tiempo}`,
			'success'
		).then(() => {
			console.log('success')
		})
	}

	juegoNuevo() {
		location.reload()
    start.iniciarJuego()
	}

  //restart movements counter
  reiniciarMovimientos(){
    this.movimientos = 0
  }

  //return random number between min and max
	getRndInteger(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min
	}

	//start counter
	IniciarCronometro() {
		if (this.stop == true) {
			this.stop = false
			this.cronometro()
		}
	}

  //add second by second with a Timeout
	cronometro() {
		if (this.stop == false) {
			this.decimales++
			if (this.decimales > 9) {
				this.decimales = 0
				this.segundos++
			}
			if (this.segundos > 59) {
				this.segundos = 0
				this.minutos++
			}
			if (this.minutos > 59) {
				this.minutos = 0
				this.hora++
			}
			this.verCronometro()
			setTimeout('start.cronometro()', 100)
		}
	}

  //update the counter on the screen
	verCronometro() {
		if (this.hora < 10) this.tiempo = ''
		else this.tiempo = this.hora
		if (this.minutos < 10) this.tiempo = this.tiempo + '0'
		this.tiempo = this.tiempo + this.minutos + ':'
		if (this.segundos < 10) this.tiempo = this.tiempo + '0'
		this.tiempo = this.tiempo + this.segundos
		document.getElementById('time').innerHTML = this.tiempo
	}

  //stops counter
	PausarTiempo() {
		this.stop = true
	}

  //restart counter
	ReiniciarTiempo() {
		if (this.stop == false) {
			this.stop = true
		}
		this.hora = this.minutos = this.segundos = this.decimales = 0
		this.tiempo = ''
		this.verCronometro()
	}
}

const start = new memoryGame()
start.iniciarJuego()