class productCard extends HTMLElement {
  constructor(){
    super();

    this.attachShadow({mode:"open"});
  }

  static get observedAttributes(){
    return ["img", "imgAlt", "titlet", "price"];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === "img") {
      this.img = newVal;
    }
    if (attr === "imgAlt") {
      this.imgAlt = newVal;
    }
    if (attr === "titlet") {
      this.titlet = newVal;
    }
    if (attr === "price") {
      this.price = newVal;
    }
  }
  
  getTemplate(){ //*Esto será puro HTML
    const template = document.createElement('template');
    template.innerHTML = `
      <main class="container">
        <section class="imgBox">
          <img src="${this.img}" alt="${this.imgAlt}"/>
        </section>

        <section class="details">
          <div class="content">
            <h2>${this.titlet}</h2>
            <h3>${this.price}</h3>
          </div>
        </section>
      </main>
      ${this.getStyles()} <!---Aplicamos los estilos--->
    `;
    return template;
  }

  getStyles() {
    return `
      <style>
      :host {
        --primary-background: #101325;
          width: 80%;
          max-width: 900px;
          min-width: 280px;
          margin: 0;
      }
      *{
        margin: 0;
      }
      .container {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          width: 300px;
          height: 100px;
          background-color: #fff;
      }
      .container .imgBox {
          position: relative;
          display: flex;
          justify-content: center;
          align-items:center;
          width: 50%;
          height: 100%;
          background-color: var(--primary-background)
      }
      .container .imgBox img {
        position: absolute;
        max-width: 100px;
        height: auto;
      }
      .container .imgBox img:hover {
        transform: scale(1.2)
      }
      .container .details {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50%;
          height: 100%;
          box-sizing: border-box;
          padding: 40px;

      }
      .container .details h2 {
          margin-bottom: 25px;
          font-size: 2.5rem;
          line-height: 0.8em;
          color: #444;
      }
      .container .details h3 {
          position: absolute;
          bottom: 5px;
          float: left;
          font-size: 2.5rem;
          color: #a2a2a2;
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

customElements.define("product-card", productCard)