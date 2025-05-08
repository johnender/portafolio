window.onload = async () => {
  const container = document.getElementById("titlesContainer");
  await startCollege(container);
  await startComplementary(container);
};

const fetchList = (path) => {
  return fetch(path)
    .then(response => response.json())
    .then(data => {
      // You can log or use the data here if needed
      console.log('Fetched data:', data);
      return data; // Return the data to the caller
    })
    .catch(error => {
      console.error('Error fetching the JSON file:', error);
      throw error; // Optional: rethrow if caller should handle it
    });
};

async function startCollege(container) {
  const headerDiv = document.createElement("div");
  headerDiv.className = "container--text";

  const heading = document.createElement("h2");
  heading.textContent = "College ones (and High School):";

  headerDiv.appendChild(heading);
  container.appendChild(headerDiv);

  const list = await fetchList('./assets/academic.json');
  if (list) {
    //console.log(list);
    Object.values(list).forEach((object) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "item";
  
      const itemFigure = document.createElement("figure");
  
      const itemImg = document.createElement("img");
      itemImg.className = "image";
      itemImg.src = object.src;
      itemImg.alt = object.alt;
  
      const itemFigcaption = document.createElement("figcaption");
      itemFigcaption.innerHTML = object.name;
  
      itemFigure.appendChild(itemImg);
      itemDiv.appendChild(itemFigure);
      itemDiv.appendChild(itemFigcaption);
      container.appendChild(itemDiv);
    })
  }else {
    console.log("damn")
  }
}

async function startComplementary(container) {
  const list = await fetchList('./assets/complementary.json');
  if (list) {
    //console.log(list);
    //adding the section header
    const complementaryHeaderDiv = document.createElement("div");
    complementaryHeaderDiv.className = "container--text";

    const complementaryHeading = document.createElement("h2");
    complementaryHeading.textContent = "Complementary ones:";

    complementaryHeaderDiv.appendChild(complementaryHeading);
    container.appendChild(complementaryHeaderDiv);
    
    Object.values(list).forEach((object) => {
      const subHeading = document.createElement("h3");
      subHeading.className = "container--text";
      subHeading.textContent = object.school;

      container.appendChild(subHeading);

      Object.values(object.titles).forEach((item) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "item";
    
        const itemFigure = document.createElement("figure");
    
        const itemImg = document.createElement("img");
        itemImg.className = "image";
        itemImg.src = item.src;
        itemImg.alt = item.alt;
    
        const itemFigcaption = document.createElement("figcaption");
        itemFigcaption.innerHTML = item.name;
    
        itemFigure.appendChild(itemImg);
        itemDiv.appendChild(itemFigure);
        itemDiv.appendChild(itemFigcaption);
        container.appendChild(itemDiv);
      })
    })
  }else {
    console.log("damn")
  }
}
