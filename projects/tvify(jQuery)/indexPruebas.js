/*
    Nota: Se debe utilizar sólo una forma (Javascript o jQuery). Si se utilizan ambas para el mismo elemento del DOM lo que hará es tomar sólo el último cambio.
*/


// Se ejecuta cuando termina de cargar (renderizar) el DOM (al igual que imágenes, etc)
window.onload = function() {
  console.log('loaded');
}

/*
  Se ejecuta inicialmente el ready y luego el onload.
  $. ó jQuery. es una función.
  document: es todo el DOM
  $('variable_del_DOM')

  Se puede escribir de igual forma...
      $(document).ready(function() {});
      $().ready(function() {});
      $(function() {});
*/
$(document).ready(function () {
  console.log('ready');
});

/*
$.noConflict().   //apra poder usar el peso de jQuery y luego el de prototype, en caso de usar ambas librerias
$(document).ready(function () {
  console.log('ready');
});

$ //este ya seria el de prototype



*/


$(function() {
  // VanillaJs (Javascript Puro)
  var header_dom = document.getElementById('app-header'); // Este es el elemento del DOM
  
  /*
      jQuery
      Selector: Busca el elemento en el arbol de jerarquia (DOM)
      Hermanos: Que estén en el mismo contenedor, a la misma altura del árbol.
      Se usa la notación del signo $ a un var para identificar que es un jQuery Object.
  */
  
  var selector = $('header'); // Siempre será jQuery Object
  var selector_id = $('#app-header'); // Con un id específico.
  var selector_class = $('.title'); // Con una clase específica.
  var selector_element_class = $('h1.title');
  var selector_idHeader_h1 = $('#app-header h1');
  var subHeader = $('h1 + h2'); // Todos los selectores2 que sean hermanos de los selectores1
  var headings = $('h1, h2'); // Acceder a todos los selectores mencionados del DOM.
  var title = $('h1', selector); // Acceder a todos los h1 dentro del header.
  var title_first = $('h1', selector[0]); // Accede al primer h1 dentro del header (Contexto: header#app-header)
  var $header = $(header_dom); // Convierte un elemento del DOM a jQuery Object.
  var array_selector = $([document, header_dom]); // Array de elementos del DOM. Devuelve objetos jQuery.
  
  // Seudo-selectores.
  var select_input = $(':input'); // Trae todos los <input> <select> <textarea> <button>.
  var select_selected = $(':selected'); // Trae todos los <option> seleccionados de <select>.
  var select_enable = $(':enabled'); // Trae todos los que estan habilitados (input, radiobutton o checkbox).
  var select_text = $(':text'); // Trae todos los <input type="text"> o el <textarea>.
  var select_file = $(':file'); // Trae todos los <input type="file">
  var select_checkbox = $(':checkbox'); // Trae todos los <input type="checkbox">

  console.log(array_selector);
  console.log(title_first);
});

// Cuando se desee incoporar Prototype y para no generar conflictos...
/*
$.noConflict();
jQuery(document).ready(function($) {
  // $ para jQuery
  alert('ready');
});
$ // $ para Prototype
*/





// (Javascript): Insertar HTML en un elemento DOM.
var target = document.getElementById('target');
target.innerHTML = "<td>Hello <b>World1</b>!</td>";
// (jQuery): Insertar HTML en un elemento DOM.
/*
Es lo mismo hacer esto:
    var target = document.getElementById('target');
    $(target).html("<td>Hello <b>World</b>!!!</td>");
y esto:
    $('#target').html("<td>Hello <b>World</b>!!!</td>");
*/
$(target).html("<td>Hello <b>World2</b>!!!</td>");



/*
    (Javascipt) Crear un nuevo div del elemento del DOM que tiene el id target.
    - Después (target.nextSibling)
    - Antes (target)
*/
var newElement = document.createElement('div');
target.parentNode.insertBefore(newElement, target.nextSibling);
/*
    (jQuery) Crear un nuevo div del elemento del DOM que tiene el id target.
    - .after() (Después)
    - .before() (Antes)
*/
$(target).before(newElement);












var specificHeader = $('header[data-title="TVify"]');

// Selección descendente:
$('#app-header').find('h1'); // similar a trabajar dentro de un contexto, en el cual #header es el que se busca, find busca h1 dentro de #header

$('#app-header').has('h1') // todos los #header que contengan
.not('title') // todos los #header que NO contengan title
$('p').filter('.title') // filtrar por condición <p class="text"><p>

// Selección del primer elemento (aplicando condiciones)
$('p').filter('.text').has('a').first()
// selección de un elemento en específico dentro de la selección
//los indices de eq empiezan en 0, apra el segundo elemento seria 1
$('p').filter('.text').has('a').eq(1)

// Actualización de la selección al hacer cambios en el DOM: //la selecciones no se actualizan solas, hay que hacerlo a mano
var ps = $('p');

//mucho codigo
//...


var p = document.createElement('p');
document.body.appendChild(p); //ejemplo en JS

// Adición de un elemento:
ps = ps.add(p);

// creación de elementos con objetos en formato JSON
var a = $('<a>', {
  href: 'url',
  target: '_blank',
  html: 'Ir a algún sitio'
  // elementos que incluyen - en su identificador camelCase
});

// Append recibe un jQo o bien un elemento del DOM que ya exista al cual añadir el elemento deseado
$('#app-body').append(a[0]);

// Acceso a un atributo mediante un getteer attr
a.attr('href');

// Aplicar un setter sobre el attr usando la concatenación
a.attr('href', 'http://google.com')
  .attr('html', 'Ir a google');

// Seteo del attr mediante un objeto:

a.attr({
  href: 'http://platzi.com',
  target: '_blank',
  html: 'Ir a platzi'
  // elementos que incluyen - en su identificador camelCase
});

// Añadir clases
$('h1').addClass('danger');
// .removeClass
//.toggleClass (si tiene la clase, la añade, si no, la remueve)


setTimeout( function () {
  $('h1').removeClass('danger');
}, 1500)

var a = $('h1')
var b = $('h1')
console.log(a == b)
console.log(a[0] == b[0])
a !== b // no son el mismo objeto, pero si referencian al mismo elemento dentro del DOM

// Modificación del CSS
$('h1').css('font-size', '35px');

// Anexar elementos al DOM:
$('header#app-header')
  .append($('<p>', {html: 'Me acaban de crear'}))

// Sinónimo de lo anterior mediante appendTo:

$('<p>', {html: 'Me acaban de crear'})
  .appendTo($('header#app-header'));
