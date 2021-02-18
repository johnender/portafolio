//para el desarrollo, activar el update on reload de devtools, asi se instala mas rapido el service worker (sw)

//self es el this de los service workers



const VERSION = 'v1'

//evento que instala los archivos en cache
self.addEventListener('install', event =>{
  event.waitUntil(precache())
})


//evento que responde cuando hay fetch
self.addEventListener('fetch', event =>{
  const request = event.request;

  //solo reaccionar al get
  if(request.method !== "GET"){
    return;
  }

  //buscar en cache
  event.respondWith(cachedResponse(request));


  //actualizar el cache, por si hay cambios
  event.waitUntil(updateCache(request));
})

async function precache() {
  const cache = await caches.open(VERSION) //para trabajar con cache hay que acbrir el cache del DOM

  //anhadimos los recursos que queremos guardar en cache
  return cache.addAll([
    './',
    './index.html',
    './assets/index.js',
    './assets/index.css',
    './assets/mediaPlayer.js',
    './assets/plugins/autoPause.js',
    './assets/plugins/autoPlay.js',
  ]);
}

//funcion que busca si lo solitado esta en cache o no y lo regresa
async function cachedResponse(request) {
  const cache = await caches.open(VERSION) //iniciamos abriendo el cache
  const response = await cache.match(request) //preguntamos al cache si ya tiene una copia
  return response || fetch(request) //si el response es undefined, respondemos con lo que nos da la red
}

//funcion que si puede, actualiza en la cache lo solicitado 
async function updateCache(request) {
  const cache = await caches.open(VERSION) //iniciamos abriendo el cache
  const response = await fetch(request) //preguntamos al cache si ya tiene una copia
  return cache.put(request, response) //agregamos lo solicitado a la cache
}