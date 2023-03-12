
//contain all the static methods to do the render work
class WRender {
    static createElement = (Node) => {
        try {
            if (typeof Node === "undefined" || Node == null) {
                return document.createTextNode("Node null or undefined.");
            } else if (typeof Node === "string" || typeof Node === "number") {
                return document.createTextNode(Node);
            } else if (Node.__proto__ === HTMLElement.prototype
            || Node.__proto__.__proto__ === HTMLElement.prototype) {//checking if the node is already and HTML element
                return Node;
            } else { //creating the new node
                const element = document.createElement(Node.type); //creating the element requested by the node type
                //validating the object has the props array and is a valid one (Object prototype)
                if (Node.props != undefined && Node.props.__proto__ == Object.prototype) {//if the node has props, will add then to the new node
                    for (const prop in Node.props) {
                        //if the object has a property "class" it'll be changed to "className", to avoid issues
                        if (prop == "class") element.className = Node.props[prop];
                        else element[prop] = Node.props[prop];
                    }
                }
                //in case there is a children node/s
                if (Node.children != undefined && Node.children.__proto__ == Array.prototype) {
                    Node.children.forEach(Child => {
                        element.appendChild(this.createElement(Child));//recursive call to this function
                    });
                } 
                return element;//returning the new HTML element
            }
        } catch (error) {
            console.log(error, Node);//console returning the error
            return document.createTextNode("Problems building the node."); //adding a note to the page
        }
    }

    //functon using the name space uri, if dont' receive the name space, by defult will use svg
    static createElementNS = (node, uri = "svg") => {
        try {
            let URI = null;
            switch (uri) {
                case "svg":
                    URI = "http:\/\/www.w3.org/2000/svg";
                    break;
                case "html":
                    URI = "http://www.w3.org/1999/xhtml";
                    break;
                case "xbl":
                    URI = "http://www.mozilla.org/xbl";
                    break;
                case "xul":
                    URI = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
                    break;
                default:
                    URI = null;
                    break;
            }
            const element = document.createElementNS(URI, node.type)
            if (node.props) {
                for (const prop in node.props) {
                    if (typeof node.props[prop] === "function") {
                        element[prop] = node.props[prop];
                    } else if (typeof node.props[prop] === 'object') {
                        element[prop] = node.props[prop];
                    } else {
                        try {
                            element.setAttributeNS(null, prop, node.props[prop])
                        } catch (error) {
                            element.setAttributeNS(URI, prop, node.props[prop]);
                        }
                    }
                }
            }
            if (node.children) {
                node.children
                    .map(this.createElementNS)
                    .forEach(child => element.appendChild(child, uri))
            }
            return element;
        } catch (error) {
        }
    }
     
    //Creating an element from a string using the js nomenclature
    static CreateStringNode = (string) => {
        let node = document.createRange().createContextualFragment(string); 
        return node.childNodes[0];
    }
       
}

//class to create all the structure based on the nodes management
class ComponentsManager{
    constructor(){
        this.type = "div";
        this.props = {
            class: "MyDiv",

        };
        this.DomComponents = [];
    }
    //can create new nodes, check the existent ones and etc
    NavigateFunction = async (IdComponent, ComponentsInstance, ContainerName)=>{
        const ContainerNavigate = document.querySelector("#" + ContainerName);
        let Nodes = ContainerNavigate.querySelectorAll(".DivContainer");
        
        //if the id don't match, removes the node from the dom and save it on memory
        Nodes.forEach((node)=>{
            if (node.id != IdComponent){
                this.DomComponents[node.id] = node;
                if (ContainerNavigate.querySelector("#" + node.id)){
                    ContainerNavigate.removeChild(node);
                }
            }
        });

        //if the object is not on the DOM
        if (!ContainerNavigate.querySelector("#" + IdComponent)){
            //verifying it's not on memory already
            if (typeof this.DomComponents[IdComponent] != "undefined"){
                ContainerNavigate.append(this.DomComponents[IdComponent]);
                return;
            }
            //if don't exist on memory, should be create form scrath
            else{
                const NewChild = WRender.createElement(ComponentsInstance);
                NewChild.id = IdComponent;
                NewChild.className = NewChild.className + " DivContainer";
                this.DomComponents[IdComponent] = NewChild;
                ContainerNavigate.append(NewChild);
                return;
            }
        }
    }
}

//exporting to use it as a ES6 module
export {WRender, ComponentsManager}