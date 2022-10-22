const legendsPicks = [];

const apexUrl = "legends.json";
const legendRole = document.createElement("span");
const legendCard = document.getElementsByClassName("legend");
const randomButton = document.getElementById("randomButton");
const theName = document.querySelector(".legendName");
const legendContainer = document.querySelector(".titleRole");

const apexGrid = document.querySelector(".apexGrid");
let markupArrayOfLegends = "";

const legend = document.querySelectorAll(".legend");

let legendPicked;
let thisLegend = "";
let newLegendArray = [];

function legendClicked() {
  // legendName.appendChild(legendRole);
  for (const legends of legend) {
    legends.addEventListener("click", (e) => {
      const legendDiv = e.target.closest("img");
      const selectedLegegend = e.target.closest("div");
      selectedLegegend.classList.toggle("selected");
      const selectedLegend = legendsPicks.indexOf(legendDiv.dataset.id);
      if (selectedLegend === -1) {
        legendsPicks.push(legendDiv.dataset.id);
      } else {
        legendsPicks.splice(selectedLegend, 1);
      }
      console.log(legendsPicks);
      newLegendArray = legendsPicks;
    });
  }
}

legendClicked();
console.log(newLegendArray);

console.log(randomLegend);

function randomLegend() {
  randomButton.addEventListener("click", (e) => {
    var legendPicked = Math.floor(Math.random() * newLegendArray.length);
    document.getElementById("legendBox").style.display = "flex";
    console.log("The legend that you picked is", legendsPicks[legendPicked]);
    //testing
  });
}
randomLegend();

fetch(apexUrl).then((response) =>
  response.json().then((data) => {
    data.legends.forEach((legend) => {
      console.log(legend);
      const element = `
      <div id="${legend.id}" class="legend">
      <img class="legendStyle" data-id="1" src="assets/${legend.legendImage}" alt="" />
      <div class="legendInfo">
          <img src="assets/medicImage.jpg" alt="">
          <div class="titleRole">
              <h2 class="legendName">${legend.name}</h2>
              <h4 id="legendRole">${legend.role} </span>
          </div>
          <p id="legendDescription"></p>
      </div>
  </div>
      `;
      markupArrayOfLegends = markupArrayOfLegends + element;
    });

    apexGrid.innerHTML = markupArrayOfLegends;

    let htmlArray = data.legends.map((aLegend) => {
      //if i do aLegend.name[0] it does work and that produces the first name

      console.log(`${aLegend.name}`);
      return `${aLegend.name}`;
    });

    data.legends.forEach((e) => {
      const legendOuterContainer = document.createElement("div");
      const legendImage = document.createElement("img");
      legendImage.setAttribute("data-id", `${data.legends.id}`);
      legendImage.setAttribute("class", "legendStyle");
      // legendImage.setAttribute("src", `${data.legends.legendImage}`);
      const legendInfo = document.createElement("div");
      legendInfo.setAttribute("class", "legendInfo");

      const nameHeader = document.createElement("h2");
      nameHeader.className = "legendName";
      nameHeader.appendChild(document.createTextNode(`${e.name}`));
      // legendContainer.appendChild(nameHeader);

      let legendName = `${e.name}`;

      // document.querySelector(".legendName").innerText = data.legends[0].name;

      // console.log(legendName);
      // console.log(legendName);
    });
    // document.querySelector("#legendDescription").innerText =
    //   data.legends[0].role;
  })
);
