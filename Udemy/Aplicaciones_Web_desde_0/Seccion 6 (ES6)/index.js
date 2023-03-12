//importing the ES6 modules
import { WRender } from "./WDevCore/WModules/WComponentsTools.js";
import "./WDevCore/WComponents/CardComponents.js"
import { MainTemplate } from "./Components/MasterTemplate.js";


//using the web component
//the async await, there telling the function to wait for the fetch to be back before procceding
window.onload = async() =>{
    await fetch('./Data/Test.json')
    .then(response => response.json())
    .then(data => {
        // data.forEach(element => {
        //     MyApp.append(WRender.createElement(element));
        // });
        console.log(data);
    });


    //other wait to do it
    /*const response = await fetch('./Data/Test.json');
    const data = await response.json();
    onsole.log(data);*/


    // //creating a little array
    // const cards = [
    //     {title: "Card 1", contain: "Contain", detail: "Card1 detail"},
    //     {title: "Card 2", contain: "Contain", detail: "Card2 detail"},
    //     {title: "Card 3", contain: "Contain", detail: "Card3 detail"}
    // ];

    // //creating a fragment to add each card
    // const Frag = document.createDocumentFragment();

    // //passing each card info to the web component and adding it to the fragment
    // for (let index = 0; index < cards.length; index++){
    //     const element = cards[index];
    //     //creating the element with the render component
    //     Frag.append(WRender.createElement({type: "w-card", props: {element: element}}));


    //     /*creating the card using the CreateElement
    //     const newCard = document.createElement("w-card");
    //     newCard.element = element;
    //     Frag.append(newCard);
    //     */
    // }
    // MyApp.append(WRender.CreateStringNode("<h1>My App</h1>"));
    // MyApp.append(Frag);
    MyApp.append(WRender.createElement(new MainTemplate()))
}


//using the web component

// window.onload = () =>{
//     //creating a little array
//     const cards = [
//         {title: "Card 1", contain: "Contain", detail: "Card1 detail"},
//         {title: "Card 2", contain: "Contain", detail: "Card2 detail"},
//         {title: "Card 3", contain: "Contain", detail: "Card3 detail"}
//     ];

//     //creating a fragment to add each card
//     const Frag = document.createDocumentFragment();

//     //passing each card info to the web component and adding it to the fragment
//     for (let index = 0; index < cards.length; index++){
//         const element = cards[index];
//         //creating the element with the render component
//         Frag.append(WRender.createElement({type: "w-card", props: {element: element}}));


//         /*creating the card using the CreateElement
//         const newCard = document.createElement("w-card");
//         newCard.element = element;
//         Frag.append(newCard);
//         */
//     }
//     MyApp.append(WRender.CreateStringNode("<h1>My App</h1>"));
//     MyApp.append(Frag);
// }


/* using the component as a function
window.onload = () =>{
    //creating a little array
    const cards = [
        {title: "Card 1", contain: "Contain", detail: "Card1 detail"},
        {title: "Card 2", contain: "Contain", detail: "Card2 detail"},
        {title: "Card 3", contain: "Contain", detail: "Card3 detail"}
    ];

    //creating a fragment to add each card
    const Frag = document.createDocumentFragment();

    //giving html format to each card an adding it to the fragment
    for (let index = 0; index < cards.length; index++){
        const element = cards[index];
        Frag.append(CardComponent(element));
    }
    MyApp.append(Frag)
}

*/