class Router {

  constructor(routes) {
      this.routes = routes;
      this._loadInitialRoute();
  }

  loadRoute(...urlSegs){
    console.log('aqui', urlSegs)
    const matchedRoute = this._matchUrlToRoute(urlSegs);//obtinen la ruta que da match
    console.log('hi',matchedRoute)

    const url = `/${urlSegs.join('/')}`;//construye el nuevo url
    const fullURl = location.origin + url;
    console.log('hi2',fullURl)
    history.pushState({},'this works', fullURl);//modifica el URl en la barra de navegacion

    const routerOutElm = document.querySelectorAll('[data-router]')[0];//seccion de la pagina a cambiar
    routerOutElm.innerHTML = matchedRoute.template;//modifica el html
 }

  _matchUrlToRoute(urlSegs){//pasamos la ruta
    const matchedRoute = this.routes.find((route) => {
        //cada ruta la convertimos a array y la cortamos desde el /, da ["/", "url", ""]
        const routePathSegs = route.path.split('/').slice(1)

        //compara si el largo es distinto
        if (routePathSegs.length !== urlSegs.length){
          console.log('routePathSegs.length', routePathSegs.length)
          console.log('urlSegs.length', urlSegs.length)
          return false;
        }

        // console.log(routePathSegs)
        // console.log(urlSegs)
        return routePathSegs
          .every((routePathSeg, i) => routePathSeg === urlSegs[i]);//si todos los elementos del array lo cumple da true, si alguno no cumple da false
    });

    return matchedRoute;
  }

  

  _loadInitialRoute() {
    const pathNameSplit = window.location.pathname.split('/'); //retorna array despues de quitar el / ["blah.com", "location"]
    const pathSegs = pathNameSplit.length > 1 ? pathNameSplit.slice(1): ''; //revisa si el array tiene mas de un elemento y regresa el segundo ["location"]
  
    // console.log('algo', pathSegs)
    // console.log('algo2', pathNameSplit)
    this.loadRoute(...pathSegs)// el ...name permite enviar un iterable como argumento de la funcion
  }
}

