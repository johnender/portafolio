// Eventos sobre el DOM

Callback
// function que recibe otra function por parámetro

function myFunc(f) {
  f();
}

myFunc(function(){
  // ...
});

function suma(nuno, ndos) {
  return nuno + ndos;
}

// ...

function calculadora(cuenta, nuno , ndos) {
  return cuenta(nuno, ndos);
}

calculadora(suma, nuno, ndos);

// sin definir cuenta por cuenta
function calculadora2(nuno, ndos, cuenta) {
  return cuenta(nuno, ndos);
}

// Function recibe dos parámetros porque en calculadora2, le decimos a cuenta que recibe dos argumentos por parámetro
calculadora2(1, 2, function(nuno, ndos) {
  return nuno + ndos;
})

// Asincronía: no conocemos cuando se va a ejecuta la acción

var postID = 'xxx';

// Definición de la función: ejemplo mejor explicado

// La definición es más clara si se escribe antes que a la instancia de la misma:
function obtenerLikes(unIdCualquiera, callback) {

  // setTimeout no deja de recibir otro callback... sólo que está en el core de JS
  setTimeout(function(){
    // Callback es la función que pasamos por parámetro a la hora de instanciar a obtenerLikes
   // ['x', 'y', 'z' ] es el array que suponemos que recibe por parámetro el callback al instanciar la función (likes)...
    callback( ['x', 'y', 'z' ] );
  }, 5000);
}

obtenerLikes(postId, function(likes) {
 // No sabemos lo que es likes, sabemos que es un argumento, pero suponemos que es un array, es lo que esperamos
  alert('Se encontraron' + likes.length + ' likes');
})










// Eventos

var button = document.getElementById('myButton');
button.addEventListener('click', function(event) {
  // no sabemos cuando ocurre el evento click, cuando lo clicka el usuario, por lo que es asíncrono y se ejecuta su callback cuando ocurra el click
  alert('Soy un handler, un callback que se termina ejecutando cuando se pasa el evento click');
});

// Esta podría ser una definición a nivel interno de addEventListener: 
/* 
 function addEventListener(action, callback) {
 if(action) {
   // event puede ser nulo, es decir, no tiene porque pasarse
   callback(event = null, someparams...);
 } elseif(...) {
  ...
 }
}
*/

// Con jQuery:

$('button').click(function(){
  // el jQuery Object tiene un método accesible llamado click que recibe un callback...
  alert('Soy un click en un button');
});

$('.product button.like').click( function (ev) {
  // this apunta al ámbito (contexto) de este objeto jQuery, en este caso, cada uno de los botones
  $(this)
    .closest('.product') // busca en la jerarquía, hacia arriba, el selector más cercano que matchee con el string que recibe el método closest
    .addClass('liked');
});

// Escucha en múltiples eventos:
$('.button').on("click change"), function() {
  console.log("se disparo el evento click o change");
}

// Múltiples eventos con diferentes callbacks:
$('p').on({
  "click": function() { console.log("me hicieron click"); },
  "mouseover": function() { console.log( "me pasaron el mouse por arriba"); }
});

//.on() realiza bindeo de elementos; actualizar el DOM y el virual DOM con los cambios.

/*
// Métodos de eventos:
// Brower events:
.resize()
.scroll()

// Document loading:
.ready();

// Event handler attachment
.off()
.on()
.one()
.trigger()
.unbind()

// Event Object; variable por parámetro cuando se ocurre el evento:
event.target
event.currentTarget
event.stopPropagation
event.preventDefault()

// Form event
.blur()
.change()
.select()
.submit()
.focus();

// Keyboard events:
.focusin()
.focusout()
.keydown()
.keypress()
.keyup()

// Mouse events
.click()
.focusout()
.hover()
.mouseup()
// ...


*/
















// Bindeo de elementos
var foo = function() { console.log('i am foo'); };
var bar = function() { console.log('i am bar'); };

// Añadir el bindeo para los elementos p
$('p').on('click', foo).on('click', bar);
// Eliminar el bindeo para p, sólo para su handler bar
$('p').off('click', bar);

// namespaces
// Después del evento click, se puede añadir un namespaces para no afectar a otros handler específicos
$('p').on('click.myNamespace', function() { /* … */} );
$('p').off('click.myNamespace');
$('p').off('.myNamespace'); // saca todos los eventos de este namespace

// Forms

$('form').on('submit', function(event) {

  event.preventDefault(); // evitar el compartimiendo común de los form a hacer un request sobre un action

  var action = $(this).attr('action');
  $.ajax(action, { /* … */ });

})

// Propagación de eventos
// Las selecciones no están vivas, no escuchan un nuevo cambio a través de un append, por ejemplo

// Propagación o burbujeo de eventos
// a -> li -> ul #list ->div #container -> document …
$('#list').on('click', 'a', function(event) {
// Se bindea cualquier a que esté dentro de list y se propaga hacia arriba
  $(this).text();
})

// Trigger; disparo de eventos sobre un objeto
$('#myButton').trigger('click');
