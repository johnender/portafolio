class myElement extends HTMLElement {
  constructor(){
    super(); //* Obtenemos acceso a todos los elementos y métodos de la clase que extendemos (heredamos)

    //Venimos al constructor que es donde generamos la instancia de esta api
      //Agregamos shadow down (API) y lo ponemos en modo open
    this.attachShadow({mode:"open"})

  }

  getTemplate(){ //*Esto será puro HTML
    const template = document.createElement('template');
    template.innerHTML = `
      <section>
        <h2>
          <slot name="title"></slot> <!---En el slot tendremos el texto que tenemos en la etiqueta de my element--->
        </h2>
        <div>
          <p>
            <slot name="paragraph"></slot>
          </p>
        </div>
      </section>
      ${this.getStyles()} <!---Aplicamos los estilos--->
    `;
    return template;
  }

  getStyles(){
    return`
    <style>
      :host{

        display: inline-block;
        width:100%;
        min-width: 300px;
        max-width: 450px;
        font-size:20px;
        background: grey;
      }

      
      :host(.blue){
        background:blue;
      }

      :host([yellow]){
        background:yellow;
      }
      </style>
    `
   
  }

  render(){//hace que el contenido del template se pueda clonar para agregarlo al DOM
    //Ahora para poder renderizar nuestros templates tenemos que cambiar el contexto
    //Donde agregamos nuestro template ya que lo estabamos agregando al dom global
    //Ahora debemos agregarlo en nuestro shadow dom que es otro contexto diferene
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
  }

  //*Esto es lo que agregará cosas al DOM
  connectedCallback(){
    this.render();
  }
}

customElements.define('my-element' , myElement); //* Definimos que la clase se va a convertir en una etiqueta