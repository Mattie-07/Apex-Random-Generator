const legendsPicks = [];
const apexUrl = "legends.json";
const legendRole = document.createElement("span");
const legendCard = document.getElementsByClassName("legend");
const randomButton = document.getElementById("randomButton");
const theName = document.querySelector(".legendName");
const legendContainer = document.querySelector(".titleRole");
const apexGrid = document.querySelector(".apexGrid");
let legendPicked;
let markupArrayOfLegends = "";
const legend = document.querySelectorAll(".legend");
let newLegendArray = [];

fetch(apexUrl).then((response) =>
  response.json().then((data) => {
    data.legends.forEach((legend) => {
      console.log(legend);
      const element = `
      <div onclick="legendClicked(this)" id="${legend.id}" class="legend">
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
  })
);

function legendClicked() {
  const legend = document.querySelectorAll(".legend");
  for (const legends of legend) {
    legends.addEventListener("click", (e) => {
      console.log("test");
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

const myTimeout = setTimeout(legendClicked, 5000);

function randomLegend() {
  randomButton.addEventListener("click", (e) => {
    var legendPicked = Math.floor(Math.random() * newLegendArray.length);
    document.getElementById("legendBox").style.display = "flex";
    console.log("The legend that you picked is", legendsPicks[legendPicked]);
    //testing
  });
}
randomLegend();
// document.querySelector("#legendDescription").innerText =
//   data.legends[0].role;
