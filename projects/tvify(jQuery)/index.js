$API = 'http://api.tvmaze.com/search/shows';


$(function() { //it's not noccesary that this function contains the other ones, this once can be closed and then the other
  

  var $tvShowsContainer = $('#app-body').find('.tv-shows');

  function renderShows(shows) {
    $tvShowsContainer.find('.loader').remove();
    shows.forEach(function (show) {
      var article = template
        .replace(':name:', show.name)
        .replace(':img:', show.image ? show.image.medium : '')
        .replace(':summary:', show.summary)
        .replace(':img alt:', show.name + " Logo")

      var $article = $(article)
      $article.hide();
      $tvShowsContainer.append($article.show());
    })
  }

  /**
   * Submit search form
   */

  $('#app-body')
    .find('form')
    .submit(function (ev) {
      ev.preventDefault();    //stop the default refresh
      var busqueda = $(this)    //the format $() is to transform the element into a jQuery object
        .find('input[type="text"]') //search for the specific atribute
        .val();   //take the value from the input atribute

      $tvShowsContainer.find('.tv-show').remove()
      var $loader = $('<div class="loader">');
      $loader.appendTo($tvShowsContainer);

      $.ajax({
        url: $API,
        data: { q: busqueda },
        success: function (res, textStatus, xhr) {
          $loader.remove();
          var shows = res.map(function (el) { //map works similar to the forEach
            return el.show;
          })

          renderShows(shows);          
        }
      })
    })

  var template = '<article class="tv-show">' +
          '<div class="left img-container">' +
            '<img src=":img:" alt=":img alt:">' +
          '</div>' +
          '<div class="right info">' +
            '<h1>:name:</h1>' +
            '<p>:summary:</p>' +
          '</div>' +
        '</article>';

  if (!localStorage.shows) {
    $.ajax($API)
      .then(function (shows) {
        $tvShowsContainer.find('.loader').remove();
        localStorage.shows = JSON.stringify(shows);
        renderShows(shows);
      })
  } else {
    renderShows(JSON.parse(localStorage.shows));
  }
  
})
