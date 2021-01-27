//varible objeto
var persona = {
  nombre = "Johnn",
  edad = 24
}


//declarativas
function miFuncion () {
  return true;
}

miFuncion(); //para llamarla

//expresion (conocidas como funciones anonimas)
var miFuncion2 = function (a,b) {
  return a + b;
}

miFuncion2(); //para llamarla




//ejemplo funcion
function saludar (nombre){
  console.log("Hola %s", nombre);
}

