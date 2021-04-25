const minimum = 1;
const maximum = 122;

//calcular valor random para buscar en la API
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

export const createImageNodes = () => {
  const wrapper = document.createElement("div"); //creando el container
  wrapper.className = "p-4";  //agregando padding

  const image = document.createElement("img");  //creando tag imagen
  image.className = "mx-auto rounded-md bg-gray-300"; //agregando estilo redondeado y background gris, margin auto, como clases de tailwind
  
  //agregando un cuadro gris para miestras se carga la imagen
  image.src =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=";
  
  //Se guarda la imagen en el dataset de html, de forma que no se muestra, pero si existe el valor
  //es una propiedad usada para comunicarse entre javascript y html
  image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;
  image.width = 320;

  wrapper.append(image);

  return [wrapper, image];
};
