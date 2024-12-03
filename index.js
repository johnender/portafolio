/**
 * Start creating event listeners for the arrows, buttons, carrousel options and modal close options
 */
window.onload = () => {
  document.querySelector(".arrow-right").addEventListener("click", clickRight);
  document.querySelector(".arrow-left").addEventListener("click", clickLeft);
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