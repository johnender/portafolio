/**
 * Start creating event listeners for the arrows, buttons, carrousel options and modal close options
 */
window.onload = () => {
  document.querySelector(".arrow-right").addEventListener("click", clickRight);
  document.querySelector(".arrow-left").addEventListener("click", clickLeft);
  document.querySelector(".send-button").addEventListener("click", e => validateForm(e));

  document.querySelectorAll(".project").forEach(element => {
    element.addEventListener("click", e => openModal(e));
  });
  document.body.addEventListener("click", e => closeModal(e));
  document.body.addEventListener("keyup", e => listenForEsc(e));
};


/** This function moves the carrousel to the right */
function clickRight() {
  const currentLeft = parseInt(
    getComputedStyle(document.querySelector(".project-container")).left,
    10
  );

  /* First need to know the kind of screen and how much porjects are displayed in the carrousel */
  const windowSize = screen.width;

  if(windowSize < 600){
    console.log("mobile")
    if (currentLeft < -810) { //if left value is lower than -810, dont move
      return;
    }
    let newValue = currentLeft - 270; //270 adding the size of the image and its margins
    document.querySelector(".project-container").style.left = `${newValue}px`;
  }
  else if (windowSize < 1024){
    console.log("tablet")
    if (currentLeft < -540) { //if left value is lower than -540, dont move
      return;
    }
    let newValue = currentLeft - 270; //270 adding the size of the image and its margins
    document.querySelector(".project-container").style.left = `${newValue}px`;
  }
  else{
    console.log("desktop")
    if (currentLeft < -270) { //if left value is lower than -270, dont move
      return;
    }
    let newValue = currentLeft - 270; //270 adding the size of the image and its margins
    document.querySelector(".project-container").style.left = `${newValue}px`;
  }
}


/** This function moves the carrousel to the left */
function clickLeft() {
  const currentLeft = parseInt(
    getComputedStyle(document.querySelector(".project-container")).left,
    10
  );
  if (currentLeft === 0) { //if left value is 0, dont move
    return;
  }
  let newValue = currentLeft + 270;
  document.querySelector(".project-container").style.left = `${newValue}px`;
}

/** Check the form before showing any notification and show error reports if there are any error */
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

/** Function to show the notification if there no errors */
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

/**Close modal function */
function listenForEsc(e) {
  if (e.keyCode === 27){
    closeModal(e)
  }
}

/** Functions to show the selected project from the carrousel */
function openModal(e) {

  // console.log(e.srcElement.alt)
  // console.log(e.srcElement.currentSrc)

  //creating the image
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

  //Adding the image to the DOM
  modal.insertBefore(img, closeButton)

  //Adding the button to the DOM
  modal.insertBefore(goButton, closeButton)

  modalContainer.style.display = "flex";
  document.getElementById('modal-header').focus();
}

/** Function to close the modal */
function closeModal(e) {
  // if the clisk is within the modal or the carrousel, dont close
  if (
    e.target.className.includes("project") ||
    e.target.className === "modal" || e.target.className === "modal-button-go"
  ) {
    return;
  } else {
    //search if there are any image on the modal to erase (cleans the modal)
    const img = document.querySelector(".modal-project-image")
    if (img){
      img.remove();
      document.querySelector(".modal-button-go").remove();
    }
    document.querySelector(".modal-container").style.display = "none";
  }
}
