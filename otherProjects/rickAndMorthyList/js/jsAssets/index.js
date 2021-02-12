const cardsContainer = document.getElementById('cards-container');

const API = 'https://rickandmortyapi.com/api/character/';
const maxPageForAPI = 34;
const apiPage = '?page=:page';
const characters = [];

const getDataRickAndMorty = async (page) => {
  try {
      const { results } = await fetchData(`${API}${apiPage.replace(':page', `${page}`)}`)
      results.map(character => {
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