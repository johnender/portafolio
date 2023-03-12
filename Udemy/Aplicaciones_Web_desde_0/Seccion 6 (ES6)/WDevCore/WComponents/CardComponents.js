//importing the WRender method becaus it's used here
import { WRender } from "../WModules/WComponentsTools.js";
import { WCssClass } from "../WModules/WStylesRender.js";

//creating the web component

class WCardComponent extends HTMLElement {
    constructor() {
        super();
        //to protect the web component to modified later, even for the app css (encapsuling it)
        this.attachShadow({ mode: "open" });
    }

    //connectedCallback is to execute this action one the component is connected
    connectedCallback() {
        if (this.shadowRoot.innerHTML != "") {
            return;
        }
        //adding the styles for the classes we'll be using
        this.shadowRoot.append(WRender.createElement({
            type: "w-style",
            props: {
                ClassList: [
                    new WCssClass(".card", {
                    display: "inline-block",
                    border: "solid 1px #444",
                    margin: "5px",
                    }), new WCssClass(".title", {
                    "font-weight": "bold",
                    padding: "15px 25px",
                    "background-color": "#444",
                    color: "#fff",
                    display: "block",
                    }), new WCssClass("section", {
                    padding: "10px 25px",
                    width: "180px"
                    }),
                ]
            }
        }))
        this.shadowRoot.append(this.DrawCard());  //adding the card encapsuled and protected
    }
    
    //creating the card by usint the WRender component
    DrawCard() {
        return WRender.createElement({
            type: "label", props: { className: "card" },
            children: [
                { type: "label", props: { className: "title", innerText: this.element.title }},
                { type: "section", props: { innerText: this.element.contain } },
                { type: "section", props: { innerText: this.element.detail } },
            ]
            });
        }
       
    //Creating the card as and HTML element (not in use)
    DrawCardOld() {
        const Card = document.createElement("div");
        Card.className = "card";
        const labelTitle = document.createElement("label");
        labelTitle.className = "title";
        labelTitle.innerText = this.element.title;
        const secContain = document.createElement("section");
        secContain.innerText = this.element.contain;
        const secDetail = document.createElement("section");
        secDetail.innerText = this.element.detail;
        Card.append(labelTitle, secContain, secDetail);
        return Card;
    }
}   
//defining how to call the component on the HMTL files
customElements.define("w-card", WCardComponent);






//estrutura basada en una funcion (not in use)
const CardComponent = (element) =>{
    const Card = document.createElement("div");
    Card.className = "card";
    const labelTitle = document.createElement("label");
    labelTitle.classname = "title";
    labelTitle.innerText = element.title;
    const secContain = document.createElement("section");
    secContain.innerText = element.contain;
    const secDetail = document.createElement("section");
    secDetail.innerText = element.detail;
    Card.append(labelTitle, secContain, secDetail);
    return Card;
}