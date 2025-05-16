window.onload = () => {
  loadData();
};

const loadData = async (orderCollege = "Neutral", orderComplementary = "Neutral") => {
  const container = document.getElementById("titlesContainer");
  container.innerHTML = "";
  await startCollege(container, orderCollege);
  await startComplementary(container, orderComplementary);
}

const fetchList = (path) => {
  return fetch(path)
    .then(response => response.json())
    .then(data => {
      // You can log or use the data here if needed
      //console.log('Fetched data:', data);
      return data; // Return the data to the caller
    })
    .catch(error => {
      //console.error('Error fetching the JSON file:', error);
      throw error; // Optional: rethrow if caller should handle it
    });
};

/* Method to create the card for each certificate */
const createCard = (object) =>{
  const itemDiv = document.createElement("div");
  itemDiv.className = "item";

  const itemFigure = document.createElement("figure");

  const itemImg = document.createElement("img");
  itemImg.className = "image";
  itemImg.src = object.src;
  itemImg.alt = object.alt;
  itemImg.title = "Received: " + object.date;

  const itemFigcaption = document.createElement("figcaption");
  itemFigcaption.innerHTML = object.name;

  itemFigure.appendChild(itemImg);
  itemDiv.appendChild(itemFigure);
  itemDiv.appendChild(itemFigcaption);
  return itemDiv;
}

const toggleOrder = (e) => {
  if(e.innerHTML === "Neutral" || e.innerHTML === "Asc" || e.innerHTML === "Desc"){
    if(e.innerHTML === "Neutral") {
      e.innerHTML = "Asc";
    } else if (e.innerHTML === "Asc"){
      e.innerHTML = "Desc";
    } else if (e.innerHTML === "Desc"){
      e.innerHTML ="Neutral";
    }
    const complementaryButton = document.getElementById('orderComplementaryButton');
    const collegeButton = document.getElementById('orderCollegeButton');
    loadData(collegeButton.innerHTML, complementaryButton.innerHTML);
  }
   else {
    console.log("Unknown error, the value is: ",e.innerHTML.value)
  }
}

async function startCollege(container, orderCollege) {
  const headerDiv = document.createElement("div");
  headerDiv.className = "container--text";

  const button = document.createElement("button");
  button.textContent = orderCollege;
  button.id = "orderCollegeButton";
  button.addEventListener('click', () => toggleOrder(button));

  const heading = document.createElement("h2");
  heading.textContent = "College ones (and High School):";

  headerDiv.appendChild(button);
  headerDiv.appendChild(heading);
  container.appendChild(headerDiv);

  const list = await fetchList('./assets/academic.json');
  let sortedList;
  if(orderCollege === "Asc"){
    sortedList = Object.values(list).sort((a, b) => new Date(a.date) - new Date(b.date));
  }else if (orderCollege === "Desc"){
    sortedList = Object.values(list).sort((a, b) => new Date(b.date) - new Date(a.date));
  }else {
    sortedList = Object.values(list)
  }
  //console.log(sortedList);
  if (sortedList) {
    sortedList.forEach((object) => {
      container.appendChild(createCard(object));
    })
  }else {
    console.log("damn")
  }
}

async function startComplementary(container, orderComplementary) {
  const list = await fetchList('./assets/complementary.json');
  if (list) {
    //adding the section header
    const complementaryHeaderDiv = document.createElement("div");
    complementaryHeaderDiv.className = "container--text";

    const button = document.createElement("button");
    button.textContent = orderComplementary;
    button.id = "orderComplementaryButton";
    button.addEventListener('click', () => toggleOrder(button));

    const complementaryHeading = document.createElement("h2");
    complementaryHeading.textContent = "Complementary ones:";

    complementaryHeaderDiv.appendChild(button);
    complementaryHeaderDiv.appendChild(complementaryHeading);
    container.appendChild(complementaryHeaderDiv);
    
    let sortedList;
    if(orderComplementary === "Asc"){
      sortedList = Object.values(list).map((school) => {
        const sortedTitles = Object.values(school.titles).sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
        return {
          ...school,
          titles: sortedTitles
        };
      }).sort((a, b) => new Date(a.titles[0].date) - new Date(b.titles[0].date)); 

      //sortedList = Object.values(list).forEach((object) => Object.values(object.titles).sort((a, b) => new Date(a.date) - new Date(b.date)));
    }else if (orderComplementary === "Desc"){
      sortedList = Object.values(list).map((school) => {
        const sortedTitles = Object.values(school.titles).sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        return {
          ...school,
          titles: sortedTitles
        };
      }).sort((a, b) => new Date(b.titles[0].date) - new Date(a.titles[0].date)); 
    }else {
      sortedList = Object.values(list)
    }
    //console.log(sortedList);
    sortedList.forEach((object) => {
      const subHeading = document.createElement("h3");
      subHeading.className = "container--text";
      subHeading.textContent = object.school;

      container.appendChild(subHeading);

      Object.values(object.titles).forEach((item) => {
        container.appendChild(createCard(item));
      })
    })
  }else {
    console.log("damn")
  }
}
