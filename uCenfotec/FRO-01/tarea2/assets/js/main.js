import "../components/product-card.js"

// const individualTab = document.querySelector("#header__nav__individuals");
// const combosTab = document.querySelector("#header__nav__combos");
// const beveragesTab = document.querySelector("#header__nav__beverages");
// const contactTab = document.querySelector("#header__nav__contactForm");

// individualTab.addEventListener("click", ()=>{
//   console.log("ahi vamos ind")
// })

const options = document.querySelectorAll('.header__nav__option');
const sections = document.querySelectorAll('section');

/**
 * For each option of the navbar do:
 * if clicked go over every section removing product and contact classes (leaving only hidden class)
 * and add product or contact class if the section has the same id than the option inneHTML
 */
options.forEach((option) =>{
  option.addEventListener('click', (event)=>{

    sections.forEach((section) =>{
      section.classList.remove('products', 'contact')
      if(section.id == event.target.innerHTML){
        if(section.id == 'Contact'){
          section.classList.add('contact')
        }else{
          section.classList.add('products')
        }
      }
    })
  })
})
