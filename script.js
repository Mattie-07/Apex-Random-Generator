const legendsPicks = [];
const legend = document.querySelectorAll(".legend");
const apexUrl = "legends.json";
const legendRole = document.createElement("span");
const legendCard = document.getElementsByClassName("legend");
const randomButton = document.getElementById("randomButton");

let legendPicked;
let thisLegend = "";
let newLegendArray = [];

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

//i would need to have a for loop that loops through all of this so that all of the information can go to the right legend. No need to rewrite this 16 or so times
fetch(apexUrl).then((response) =>
  response.json().then((data) => {
    console.log(data.legends[{ legendsPicks }]);
    data.legends.forEach((e) => {
      let legendName = `${e.name}`;
      // console.log(legendName);
    });
    document.querySelector("#legendDescription").innerText =
      data.legends[0].role;

    document.querySelector("#legendName").innerText = data.legends[0].name;
  })
);
