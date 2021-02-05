const fetchData = require('../utils/fecthdata')

const API = 'https://rickandmortyapi.com/api/character/'; //sin el ultimo / da problemas en los siguientes llamados



// nuestra funcion asíncrona, le devemos pasar la api
const anotherFunction = async (url_api) => {
  // el TryCatch, para que se maneje de manera sincrónica
  try {
    // esperamos que se haga la primera llamada
    const data = await fetchData(url_api);

    // esperamos que se haga la segunda llamada
    const character = await fetchData(`${url_api}${data.results[0].id}`)

    // esperamos que se haga la tercera llamada
    const origin = await fetchData(character.origin.url);

    // imprimimos las datos de la api
    console.log(data.info.count);
    console.log(character.name);
    console.log(origin.dimension);

  } catch (error) {
    // si hay algun error lo mostramos
    console.error(error);
  }
}

/*
console.log('before');
// mandamos a llamar nuestra api
anotherFunction(API);
console.log('After');
*/

/*para realizar el llamado de forma sincrona */
(async () => {
  console.log('Before 1');
  await anotherFunction(API);
  console.log('After 1');
})()