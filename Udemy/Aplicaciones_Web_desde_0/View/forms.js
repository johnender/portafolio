import {WRender} from "../WDevCore/WModules/WComponentsTools.js"
import {WCssClass} from "../WDevCore/WModules/WStylesRender.js"

class WFormsJS extends HTMLElement {
    constructor(ModelObject, Save){
        super();
        this.ModelObject = ModelObject ??{};
        this.Object = {};
        this.Save = Save;
        this.FormContainer = WRender.createElement({
            type: "dic", props: {className: "FormContainer"}
        });
        this.append(WRender.createElement({ type: 'W-style',
            props: {id: '', ClassList: [
                new WCssClass(`.FormContainer`, {
                    display: 'flex',
                    "flex-direction": "column",
                }), new WCssClass(`.ControlInput`, {
                    padding: '10px',
                    border: "solid 2px #eee",
                    witdh: "calc(100% - 20px)",
                    "margin-bottom": "10px"
                }), new WCssClass(`.BtnInput`, {
                    padding: '10px',
                    border: "none",
                    color: "#fff",
                    "background-color": "#4be",
                    "text-align": "center"
                }), 
            ]}
        }));
    }
    //need this, because is a private function
    connectedCallback(){ this.DrawComponent();}
    DrawComponent = async () => {
        //to avoid recreating the inputs
        if (this.FormContainer.innerHTML != ""){
            return;
        }
        for (const prop in this.ModelObject){
            this.Object[prop] = null;
            const Control = WRender.createElement({
                type: 'input', props:
                {
                    class: 'ControlInput', placeholder: prop, 
                    onchange: (ev) =>{
                        this.Object[prop] = ev.target.value;
                    }
                }
            });
            this.FormContainer.append(Control);
        }
        const Btn = WRender.createElement({
            type: 'input', props:
            {
                type: 'button', class: 'BtnInput', value: "Save", onclick: (ev) =>{
                    //verifying the object is not null
                    for(const prop in this.Object){
                        if (this.Object[prop] == null){
                            alert(`The ${prop} data is required`);
                            return;
                        }
                    }
                    if (this.Save){
                        this.Save(this.Object);
                    }
                    console.log(this.Object)
                }
            }
        });
        this.FormContainer.append(Btn);
        this.append(this.FormContainer);
    }
}
customElements.define('w-form', WFormsJS);
export {WFormsJS}