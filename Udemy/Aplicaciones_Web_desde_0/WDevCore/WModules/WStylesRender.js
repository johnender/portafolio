import { WRender } from "./WComponentsTools.js";


//list of all the class of the css selectors
class CSSProps {
    "align-content" = null;
    "align-items" = null;
    "align-self" = null;
    "all" = null;
    "animation" = null;
    "animation-delay" = null;
    "animation-direction" = null;
    "animation-duration" = null;
    "animation-fill-mode" = null;
    "animation-iteration-count" = null;
    "animation-name" = null;
    "animation-play-state" = null;
    "animation-timing-function" = null;
    "caption-side" = null;
    "caret-color" = null;
    //"@charset" = null;
    "clear" = null;
    "clip" = null;
    "color" = null;
    "column-count" = null;
    "column-fill" = null;
    "column-gap" = null;
    "column-rule" = null;
    "column-rule-color" = null;
    "column-rule-style" = null;
    "column-rule-width" = null;
    "column-span" = null;
    "column-width" = null;
    "columns" = null;
    "content" = null;
    "counter-increment" = null;
    "counter-reset" = null;
    "cursor" = null;
    "direction" = null;
    "display" = null;
    "empty-cells" = null;
    "filter" = null;
    "flex" = null;
    "flex-basis" = null;
    "flex-direction" = null;
    "flex-flow" = null;
    "flex-grow" = null;
    "flex-shrink" = null;
    "flex-wrap" = null;
    "float" = null;
    "font" = null;
    "font-family" = null;
    "font-feature-settings" = null;
    "font-kerning" = null;
    "font-language-override" = null;
    "font-size" = null;
    "font-size-adjust" = null;
    "font-stretch" = null;
    "font-style" = null;
    "font-synthesis" = null;
    "font-variant" = null;
    "font-variant-alternates" = null;
    "font-variant-caps" = null;
    "font-variant-east-asian" = null;
    "font-variant-ligatures" = null;
    "font-variant-numeric" = null;
    "font-variant-position" = null;
    "font-weight" = null;
    "grid" = null;
    "grid-area" = null;
    "grid-auto-columns" = null;
    "grid-auto-flow" = null;
    "grid-auto-rows" = null;
    "grid-column" = null;
    "grid-column-end" = null;
    "grid-column-gap" = null;
    "grid-column-start" = null;
    "grid-gap" = null;
    "grid-row" = null;
    "grid-row-end" = null;
    "grid-row-gap" = null;
    "grid-row-start" = null;
    "grid-template" = null;
    "grid-template-areas" = null;
    "grid-template-columns" = null;
    "grid-template-rows" = null;
    "hanging-punctuation" = null;
    "height" = null;
    "hyphens" = null;
    "image-rendering" = null;
    "isolation" = null;
    "justify-content" = null;
    "left" = null;
    "letter-spacing" = null;
    "line-break" = null;
    "line-height" = null;
    "list-style" = null;
    "list-style-image" = null;
    "list-style-position" = null;
    "list-style-type" = null;
    "margin" = null;
    "margin-bottom" = null;
    "margin-left" = null;
    "margin-right" = null;
    "margin-top" = null;
    "max-height" = null;
    "max-width" = null;
    "min-height" = null;
    "min-width" = null;
    "mix-blend-mode" = null;
    "object-fit" = null;
    "object-position" = null;
    "opacity" = null;
    "order" = null;
    "orphans" = null;
    "outline" = null;
    "outline-color" = null;
    "outline-offset" = null;
    "outline-style" = null;
    "outline-width" = null;
    "overflow" = null;
    "overflow-wrap" = null;
    "overflow-x" = null;
    "overflow-y" = null;
    "padding" = null;
    "padding-bottom" = null;
    "padding-left" = null;
    "padding-right" = null;
    "padding-top" = null;
    "page-break-after" = null;
    "page-break-before" = null;
    "page-break-inside" = null;
    "perspective" = null;
    "perspective-origin" = null;
    "pointer-events" = null;
    "position" = null;
    "quotes" = null;
    "resize" = null;
    "right" = null;
    "scroll-behavior" = null;
    "tab-size" = null;
    "table-layout" = null;
    "text-align" = null;
    "text-align-last" = null;
    "text-combine-upright" = null;
    "text-decoration" = null;
    "text-decoration-color" = null;
    "text-decoration-line" = null;
    "text-decoration-style" = null;
    "text-indent" = null;
    "text-justify" = null;
    "text-orientation" = null;
    "text-overflow" = null;
    "text-shadow" = null;
    "text-transform" = null;
    "text-underline-position" = null;
    "top" = null;
    "transform" = null;
    "transform-origin" = null;
    "transform-style" = null;
    "transition" = null;
    "transition-delay" = null;
    "transition-duration" = null;
    "transition-property" = null;
    "transition-timing-function" = null;
    "unicode-bidi" = null;
    "user-select" = null;
    "vertical-align" = null;
    "visibility" = null;
    "white-space" = null;
    "widows" = null;
    "width" = null;
    "word-break" = null;
    "word-spacing" = null;
    "word-wrap" = null;
    "writing-mode" = null;
    "z-index" = null;
    "background" = null;
    "background-color" = null;
    "background-image" = null;
    "border" = null;
    "border-radius" = null;
    "border-top" = null;
    "border-right" = null;
    "border-left" = null;
    "border-bottom" = null;
    "box-shadow" = "";
}

//the prop list by defauld is to define what kind of list is the function waiting for
class WCssClass {
    constructor(ClassName, PropsList = (new CSSProps())) {
        this.Name = ClassName;
        this.CSSProps = PropsList;
    }
}
   
//class to give styles to elements that are out of it
class WStyledRender extends HTMLElement {
    constructor() {
        super(); //to use the properties to the referencied class (HTMLElement)
    }
    attributeChangedCallBack() {
        this.DrawStyle();
    }
    connectedCallback() {
        if (this.innerHTML != "") {//validating the object is not empty
            return;
        }
        this.DrawStyle();
        this.style.display = "none"; //avoiding issues like the use of grid braking the component
    }
    DrawStyle() {
        let styleFrag = {
            type: "style",
            props: {},
            children: []
        }
        //validating we have a classlist (is ClassList, because the classlist property already exists)
        //validating the classlist have the right object (array)
        if (this.ClassList != undefined && this.ClassList.__proto__ == Array.prototype) {
            styleFrag.children.push(this.DrawClassList(this.ClassList));
        }

        //Verifying if there is a Media query array on the configuration
        if (this.MediaQuery != undefined && this.MediaQuery.__proto__ == Array.prototype) {
            //the cicle create a new <file> for each media query and add all the styles
            this.MediaQuery.forEach(MediaQ => {
                let MediaQuery = `@media ${MediaQ.condition}{
                    ${this.DrawClassList(MediaQ.ClassList)}
                }`;
                //addign al the media queries to the fragment
                styleFrag.children.push(MediaQuery);
            });
        }

        //Verifying if there is a keyframe array on the configuration
        if (this.KeyFrame != undefined && this.KeyFrame.__proto__ == Array.prototype) {
            this.KeyFrame.forEach(KeyF => {
                let KeyFrame = `@keyframes ${KeyF.animate} {
                    ${this.DrawClassList(KeyF.ClassList)}
                }`;
                //addign al the keyframes to the fragment
                styleFrag.children.push(KeyFrame);
            });
        }
        console.log(styleFrag)
        this.append(WRender.createElement(styleFrag));
    }

    //don't need to validate, 'cause is already done
    DrawClassList(ClassList) {
        let bodyStyle = "";
        ClassList.forEach(Class => {
            let bodyClass = "";
            //verifying each class have the right prototype
            if (Class.__proto__ == WCssClass.prototype) {
                for (const prop in Class.CSSProps) {
                    //adding to the string each property by name and value
                    bodyClass = bodyClass + `${prop}: ${Class.CSSProps[prop]};`;
                }
                //adding to the string each class by name and value
                bodyClass = `${Class.Name} {${bodyClass}}`;
                //console.log(bodyClass);
                bodyStyle = bodyStyle + bodyClass;
            }
        });
        return bodyStyle;
    }
}
   
customElements.define("w-style", WStyledRender);
export {WCssClass};