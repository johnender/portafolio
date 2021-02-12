const cardsContainer = document.getElementById('cards-container');

const API = 'https://rickandmortyapi.com/api/character/';
const maxPageForAPI = 34; //how much pages will be called
const apiPage = '?page=:page'; //to complete the url
const characters = [];

//this function is asynchronous, thanks to the async
const getDataRickAndMorty = async (page) => {
  try {
      const { results } = await fetchData(`${API}${apiPage.replace(':page', `${page}`)}`) //calls function fecth with the url replacing :page for the actual page number
      results.map(character => {  //for each one of the results/characters
        const card = cardGenerator(character);
        cardsContainer.appendChild(card);
      });
  } catch (error) {
    console.error(error);
  }
}

//main function that calls the logic function
(function() {
  for (let i = 1; i <= maxPageForAPI; i++) {
    getDataRickAndMorty(i);
  }
})();