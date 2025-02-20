/* window.onload = () => {
  myFunction();
} */

/* 
var x = 123e5;
document.getElementById("demo").innerHTML = x ; */
/* 
function myFunction() {
  var res = "";
  res = res + Number.isInteger('123');
  document.getElementById("demo").innerHTML = res;
} */
/* 
  function myFunction() {
  document.getElementById("demo").innerHTML = Number.MAX_VALUE;
} */

const quotesSection = document.querySelector('.quotes');
const loader = document.querySelector('.loader');


// control variables
let currentPage = 1;
const limit = 10;
let total = 0;

const getQuotes = async (page, limit) => {
  const API_URL = `https://api.javascripttutorial.net/v1/quotes/?page=${page}&limit=${limit}`;
  const response = await fetch(API_URL);
  // handle 404
  if (!response.ok) {
      throw new Error(`An error occurred: ${response.status}`);
  }
  return await response.json();
}

// show the quotes
const showQuotes = (quotes) => {
  quotes.forEach(quote => {
      const quoteElem = document.createElement('blockquote');
      quoteElem.classList.add('quote');

      quoteElem.innerHTML = `
          <span>${quote.id}-</span>
          ${quote.quote}
          <footer>${quote.author}</footer>
      `;

      quotesSection.appendChild(quoteElem);
  });
};

const hasMoreQuotes = (page, limit, total) => {
  const startIndex = (page - 1) * limit + 1;
  return total === 0 || startIndex < total;
};

// load quotes
const loadQuotes = async (page, limit) => {

  // show the loader
  showLoader();

  // 0.5 second later
  setTimeout(async () => {
      try {
          // if having more quotes to fetch
          if (hasMoreQuotes(page, limit, total)) {
              // call the API to get quotes
              const response = await getQuotes(page, limit);
              // show quotes
              showQuotes(response.data);
              // update the total
              total = response.total;
          }
      } catch (error) {
          console.log(error.message);
      } finally {
          hideLoader();
      }
  }, 500);
};

const handleScroll = () => {
  const {
    scrollTop,
    scrollHeight,
    clientHeight
  } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5 &&
      hasMoreQuotes(currentPage, limit, total)) {
      currentPage++;
      loadQuotes(currentPage, limit);
  }
}

window.addEventListener('scroll', handleScroll);

//controlling the loader visibility
const hideLoader = () => {
  loader.classList.remove('show');
};

const showLoader = () => {
  loader.classList.add('show');
};





//starting with a initial call to the function
window.onload = () => {
  loadQuotes(currentPage, limit);
}