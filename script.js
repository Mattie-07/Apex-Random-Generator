const legendsPicks = [];
const legend = document.querySelectorAll(".legend");
let thisLegend = "";
const apexUrl = "legends.json";
const legendRole = document.createElement("span");
let newLegendArray = [];
const legendCard = document.getElementsByClassName("legend");
const randomButton = document.getElementById("randomButton");

function legendClicked() {
  legendName.appendChild(legendRole);
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
      return legendsPicks;
    });
  }
}

console.log(legendClicked());

console.log(randomLegend);

function randomLegend() {
  randomButton.addEventListener("click", (e) => {});
}

//i would need to have a for loop that loops through all of this so that all of the information can go to the right legend. No need to rewrite this 16 or so times
fetch(apexUrl).then((response) =>
  response.json().then((data) => {
    console.log(data.legends);
    data.legends.forEach((e) => {
      let legendName = `${e.name}`;
      // console.log(legendName);
    });
    document.querySelector("#legendDescription").innerText =
      data.legends[0].role;

    // console.log(data.legends[0].role);
    document.querySelector("#legendName").innerText = data.legends[0].name;
    // document.querySelector("#legendRole").innerText = data.legends[0].role;
  })
);
// let legendDiv = document.createElement("div");
// legendDiv.setAttribute("id", e.name);
// legendDiv.setAttribute("class", legend);
// let imgDiv = document.createElement("img");
// imgDiv.setAttribute("id", `${e.id}`);

// let infoDiv = document.createElement("div");
// let theClassImg = document.createElement("img");
// theClassImg.setAttribute("src");
// let legendTitle = document.createElement("h2");
// let legendDescription = document.createElement("p");

// console.log(e.id);
