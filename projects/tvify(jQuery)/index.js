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