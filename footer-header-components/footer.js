class footerBar extends HTMLElement {
  constructor(){
    super();

    this.attachShadow({mode:"open"});
  }


  getTemplate(){ //*Esto será puro HTML
    const template = document.createElement('template');
    template.innerHTML = `
      <footer>
        <!-- <p>Soy un footer</p> -->
        <nav class="social">
            <a href="https://www.facebook.com/"><img src= "../images/facebook_logos.png" alt="Logo de Facebook" title="Facebook profile link"></a>
            <a href="https://www.linkedin.com/in/johnn-hern%C3%A1ndez-delgado-a974bbb3/"><img src= "../images/linkedin-png-logo-5.png" alt="Logo de LinkedIn" title="LinkedIn profile link"></a>
        </nav>
      </footer>
      ${this.getStyles()} <!---Aplicamos los estilos--->
    `;
    return template;
  }


  getStyles() {
    return `
      <style>
      footer {
        text-align: left;
        background: black;
        width: 100%;
        position: fixed;
        bottom: 0;
      }

      footer .social {
        font-size: 2rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: start;
      }

      footer .social img {
        max-width: 40px;
      }

      footer .social img:hover{
        transform: scale(1.5);
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

customElements.define("my-footer", footerBar)