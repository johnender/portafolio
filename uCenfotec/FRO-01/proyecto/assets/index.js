window.onload = () => {
  document.querySelector(".arrow-right").addEventListener("click", clickRight);
  document.querySelector(".arrow-left").addEventListener("click", clickLeft);
  document
    .querySelector(".send-button")
    .addEventListener("click", e => validateForm(e));
  document.querySelectorAll(".project").forEach(element => {
    element.addEventListener("click", e => openModal(e));
  });
  document.body.addEventListener("click", e => closeModal(e));
  document.body.addEventListener("keyup", e => listenForEsc(e));
};

/** Esta funcion se llama cuando la persona hace click en la fecha derecha del carousel para navegar a la derecha */
function clickRight() {
  const currentLeft = parseInt(
    getComputedStyle(document.querySelector(".project-container")).left,
    10
  );

  const windowSize = screen.width;

  if(windowSize < 600){
    console.log("mobile")
    if (currentLeft < -810) { //si el valor de izquierda es menor a -270, para de mover el contenido
      return;
    }
    let newValue = currentLeft - 270; //270 toma en cuenta el tamaño de la imagen mas sus margenes
    document.querySelector(".project-container").style.left = `${newValue}px`;
  }
  else if (windowSize < 1024){
    console.log("tablet")
    if (currentLeft < -540) { //si el valor de izquierda es menor a -270, para de mover el contenido
      return;
    }
    let newValue = currentLeft - 270; //270 toma en cuenta el tamaño de la imagen mas sus margenes
    document.querySelector(".project-container").style.left = `${newValue}px`;
  }
  else{
    console.log("desktop")
    if (currentLeft < -270) { //si el valor de izquierda es menor a -270, para de mover el contenido
      return;
    }
    let newValue = currentLeft - 270; //270 toma en cuenta el tamaño de la imagen mas sus margenes
    document.querySelector(".project-container").style.left = `${newValue}px`;
  }
}

/** Esta funcion se llama cuando la persona hace click en la fecha izquierda del carousel para navegar a la izquierda */
function clickLeft() {
  const currentLeft = parseInt(
    getComputedStyle(document.querySelector(".project-container")).left,
    10
  );
  if (currentLeft === 0) { //si el valor de izquiera es 0, retornar para no seguir movierno el contenido
    return;
  }
  let newValue = currentLeft + 270;
  document.querySelector(".project-container").style.left = `${newValue}px`;
}

/** Validar el formulario antes de mostrar la notificacion */
function validateForm(e) {
  e.preventDefault();
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email")
  if (nameField.value === ""){
    document.getElementById("name-error").innerHTML = "! To send the form it's needed a name";
  } else if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailField.value))){ //checking email address
    document.getElementById("email-error").innerHTML = "! To send the form it's needed a valid email";
  }else {
    showNotification();
  }
}

/** Esta funcion se llama cuando la persona hace click en el boton de enviar del formulario de contacto */
function showNotification() {
  document.getElementById("name-error").innerHTML = "";
  document.getElementById("email-error").innerHTML = "";
  document.querySelector('.form-container').reset();
  document.querySelector(".notification").style.display = "flex";
  document.querySelector(".notification").innerHTML = "The form was send correctly";
  setTimeout(function() {
    document.querySelector(".notification").style.display = "none";
  }, 3000);
}

/**Escucha por la clave esc para cerrar el modal */
function listenForEsc(e) {
  if (e.keyCode === 27){
    closeModal(e)
  }
}

/** Esta funcion se llama cuando la persona hace click en cualquier porjecto del carousel */
function openModal(e) {

  // console.log(e.srcElement.alt)
  // console.log(e.srcElement.currentSrc)

  //creando la imagen respectiva
  const img = document.createElement("img");
  img.src = `${e.srcElement.currentSrc}`
  img.alt = `${e.srcElement.alt}`
  img.classList.add("modal-project-image")


  const goButton = document.createElement("button");
  goButton.classList.add("modal-button-go");
  goButton.type = "button";
  goButton.textContent = "Go to the project";
  goButton.onclick = ()=>{
    window.open(`${e.srcElement.dataset.rel}`, '_blank');
    // window.location.href = `${e.srcElement.dataset.rel}`;
  }

  // console.log(e.srcElement.dataset.rel)

  const modalContainer = document.querySelector(".modal-container");
  const modal = document.querySelector(".modal");
  const closeButton = document.querySelector(".modal-button-close");

  //Agregando la imagen
  modal.insertBefore(img, closeButton)

  //Agregando el boton
  modal.insertBefore(goButton, closeButton)

  modalContainer.style.display = "flex";
  document.getElementById('modal-header').focus();
}

/** Esta funcion se llama para cerrar el modal */
function closeModal(e) {
  // si el click occurio dentro del las imagenes del carousel o dentro del modal, no se cierra el modal
  if (
    e.target.className.includes("project") ||
    e.target.className === "modal" || e.target.className === "modal-button-go"
  ) {
    return;
  } else {
    //busca si existe imagen que deba eliminarse dentro del modal
    const img = document.querySelector(".modal-project-image")
    if (img){
      img.remove();
      document.querySelector(".modal-button-go").remove();
    }
    document.querySelector(".modal-container").style.display = "none";
  }
}
