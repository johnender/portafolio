//Otra forma de crear etiquetas html
const template =  document.createElement('div');
template.innerHTML = `
<style>
  p{

    color:blue;
  }

  .texto{
    color:red;
  }

</style>
<p class="texto">Hola mundo 2!! <p>
<p>texto ejemplo para la clase</p>
`;


//Inicalizamos nuestra clase y heredamos las propiedades de HTMLElement

class myElement extends HTMLElement{
  //En el constructor estamos inicializando todo lo que se va a guardar en memoria 
    //Para que despues podamos agregarlos como nodos al dom
  constructor(){
    //Como estamos heredando de una clase utilizamos el super para heredar los metodos del HTMLElement
    //El constructor de esa clase de la que heredamos
    super();

    //inicializamos todo lo que debe existir en memoria
    this.p = document.createElement('p');
  }

  //Para poder utilizar mi etiqueta p utilizamos connectedCallback
    //Tiene que escribir asi tal cual
  connectedCallback(){
    this.p.textContent = "Hola mundo!!";
    this.appendChild(this.p);
    this.appendChild(template);


  }

}



//Para definir nuestra clase como etiqueta hacemos lo siguiente
  //El define nos ayuda a definir el nombre de la etiqueta que utilizaremos
    //Define recibe dos parametros el primero es el nombre de nuestra etiqueta (al menos dos palabras separadas)
      //El segundo es el nombre de la clase
customElements.define('my-element', myElement);