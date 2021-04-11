class myElement extends HTMLElement {
  constructor(){
    super(); //* Obtenemos acceso a todos los elementos y métodos de la clase que extendemos (heredamos)

    //Venimos al constructor que es donde generamos la instancia de esta api
      //Agregamos shadow down (API) y lo ponemos en modo open
    this.attachShadow({mode:"open"})
  }

  static get observedAttributes(){
    //Aqui le decimos al observador que atributos tendra nuestro componente
    //Si hay otro atributo que no este aqui este no sera de importancia
    return ['title','parrafo','img']
  }
    //Ya teniendo los atributos que seran observados podremos utilizar el
      //attributeChangedCallback
        //Esta funcion recibe tres parametro
          // 1. valor actual
          // 2. valor viejo
          // 3. nuevo valor
  attributeChangedCallback(attr, oldVal, newVal){

    //Aqui vamos a generar los cambios de acuerdo a lo que existe en los atributos

    //aqui hacemos una validacion para verificar si existe el atributo en nuestro componente
    if(attr === "title"){

    //le asignamos a la variable title que obtenemos desde el observador de
    //nuestro componente un nuevo valor 
    //Esto quiere decir que si hay un nuvelo valor se tiene que hacer el cambio de 
    //Forma dinamica
      this.title = newVal;
    }

    if(attr === "parrafo"){
      this.parrafo = newVal;
    }

    if(attr === "img"){
      this.img = newVal;
    }

      

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