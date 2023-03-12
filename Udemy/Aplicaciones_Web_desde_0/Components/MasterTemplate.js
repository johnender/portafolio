//document for responsive css with js, all the css is on the component
//this file could be diveided into more files
import { WCssClass } from "../WDevCore/WModules/WStylesRender.js";
import { ComponentsManager } from "../WDevCore/WModules/WComponentsTools.js";
import { WFormsJS } from "../View/forms.js"
const CompM = new ComponentsManager();

//because there is only a little bit of css, this file can have it all, otherwise we should divide the components and each one should have its own styles
class MainTemplate{
    type= "div"; //if we don't add it, it would be undefined
    props= {class: "MainTemplate"}
    MainStyle = {
        type: "w-style",
        props: {
            ClassList:[
                //establishing the main styles
                new WCssClass(".MainTemplate", {
                    display: "grid", 
                    "grid-template-columns": "200px calc(100% - 200px)",
                    "grid-template-rows": "60px calc(100vh - 60px)",
                    "font-family": "arial",
                    margin: "auto",
                    width: "1440px",
                    "box-shadow": "0 2px 2px 0 rgba(0, 0, 0, 0.5)"
                }), 
                //adding css to the header
                new WCssClass(".MainTemplate header", {
                    "grid-column": "1/3",
                    display: "flex",
                    "justify-content": "center",
                    "align-items": "center",
                    "border-bottom": "5px solid #4be"
                }),

                new WCssClass(".MainTemplate nav", {
                    display: "flex",
                    "flex-direction": "column",
                    padding: "10px",
                    background: "#999999"
                }),

                new WCssClass(".MainTemplate header", {
                    "grid-column": "1/3",
                    display: "flex",
                    "justify-content": "center",
                    "align-items": "center",
                    "border-bottom": "5px solid #4be"
                }),

                new WCssClass(".MainTemplate nav a", {
                    "text-decoration":"none",
                    color: "#fff",
                    margin: "5px",
                    "font-wight": "blod",
                    cursor: "pointer"
                }),

                new WCssClass(".MainTemplate main", {
                    padding: "10px"
                }),
            ],
            //adding the media query for width lower than 1440px
            MediaQuery:[
                {condition: "(max-width: 1440px)", 
                ClassList:[
                    new WCssClass(".MainTemplate", {
                        width: "100%",
                    })

                ]}
            ], 

            MediaQuery:[
                {condition: "(max-width: 800px)", 
                ClassList:[
                    new WCssClass(".MainTemplate", {
                        width: "100%",                        
                        "grid-template-columns": "100%",
                        "grid-template-rows": "60px 60px 100px calc(100vh - 220px)",
                    }),new WCssClass(".MainTemplate nav", {
                        "flex-direction": "row",
                        "justify-content": "center",
                        "align-items": "center"
                    }),new WCssClass(".MainTemplate nav a", {
                        margin: "5px 10px 5px 10px",
                    }),
                    //if we don't change how much columns the header covers, it breaks the layout
                    new WCssClass(".MainTemplate header", {
                        "grid-column": "1/1",
                    }),

                ]}
            ], 
        }
    };
    children =[
        this.MainStyle,
        new header(),
        new Navigator(),
        new Main()
    ];
}

//we could extend Componentsmanager here to access all he's functions
class Navigator{
    type = "nav";
    children = [
        {type: "a", props:{innerText: "Page 1", href: "#", onclick: async()=>{
            const {PageContainer} = await import("../View/page1.js");
            CompM.NavigateFunction("page1", PageContainer, "MainApp");
        }}},
        {type: "a", props:{innerText: "Page 2", href: "#", onclick: async()=>{
            const ArticlesA = [{contain: "Article A1"},{contain: "Article A2"},{contain: "Article A3"},{contain: "Article A4"},{contain: "Article A5"}]
            const {Page2} = await import("../View/page2.js");
            CompM.NavigateFunction("page2", new Page2(ArticlesA), "MainApp");            
        }}},
        {type: "a", props:{innerText: "Page 3", href: "#", onclick: async()=>{
            const Articlesb = [{contain: "Article b1"},{contain: "Article b2"},{contain: "Article b3"},{contain: "Article b4"},{contain: "Article b5"}]
            const {Page2} = await import("../View/page2.js");
            //if we don't change the name/id it breaks the memory
            CompM.NavigateFunction("page3", new Page2(Articlesb), "MainApp"); 
            alert("Just another instance of Page2")
        }}},
        {type: "a", props:{innerText: "Form", href: "#", onclick: async()=>{
            const ModelObject = {
                id: 1,
                description: "",
                Name: "",
                "Last Name": "",
                Address: ""
            }
            CompM.NavigateFunction("WFormsJS", new WFormsJS(ModelObject), "MainApp");            
        }}},
    ];
}

class header{
    type = "header";
    children = [
        {type: "h1", props:{innerText: "MyApp"}}
    ];
}

class Main{
    type = "main";
    props = {id: "MainApp"}
    children = [];
}

export {MainTemplate}