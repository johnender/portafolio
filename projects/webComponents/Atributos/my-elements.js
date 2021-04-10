class myElement extends HTMLElement {
  constructor(){
    super(); //* Obtenemos acceso a todos los elementos y métodos de la clase que extendemos (heredamos)

    //Venimos al constructor que es donde generamos la instancia de esta api
      //Agregamos shadow down (API) y lo ponemos en modo open
    this.attachShadow({mode:"open"})

    //inicializamos unas variable para generar el match y  obtener
    //El atributo de la etiqueta
    this.title = this.getAttribute('title');
    this.parrafo = this.getAttribute('parrafo');
    this.img = this.getAttribute('img');

  }

  getTemplate(){ //*Esto será puro HTML
    const template = document.createElement('template');
    template.innerHTML = `
    <section>

      <h2>${this.title}</h2>
      <div>
        <p>${this.parrafo}</p>
        <img src="${this.img}">
      </div>
    
    </section>
      ${this.getStyles()} <!---Aplicamos los estilos--->
    `;
    return template;
  }

  getStyles(){ //*Esto será puro CSS
    return `
    <style>
      h2{
        color:red;
      }
    </style>
    `;
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