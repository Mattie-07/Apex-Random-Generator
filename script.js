const legendsPicks = [];
const apexUrl = "legends.json";
const legendRole = document.createElement("span");
const legendCard = document.getElementsByClassName("legend");
const randomButton = document.getElementById("randomButton");
const theName = document.querySelector(".legendName");
const legendContainer = document.querySelector(".titleRole");
const apexGrid = document.querySelector(".apexGrid");
const legendInBox = [];
let legendPicked;
let markupArrayOfLegends = "";
const box = document.querySelector(".box")
const legend = document.querySelectorAll(".legend");
let newLegendArray = [];
const legendBox = document.querySelector("#legendBox");

fetch(apexUrl).then((response) =>
  response.json().then((data) => {
    console.log(data.legends);
    data.legends.forEach((legend) => {
      var result = JSON.stringify(legend.abilities[0].passive);
      var passiveString = result.substring(1, result.length - 1);
      var tacticalResult = JSON.stringify(legend.abilities[0].tactical);
      var tacticalString = tacticalResult.substring(
        1,
        tacticalResult.length - 1
      );
      const element = `
      <div id="${legend.id}" class="legend">
        <img class="legendStyle" data-id="${legend.id}" src="assets/${legend.legendImage}" alt="" />
        <div class="legendInfo">
            <img src="assets/${legend.classIcon}" alt="">
            <div class="titleRole">
                <h2 class="legendName">${legend.name}</h2>
                <h4 id="legendRole">${legend.role} </span>
            </div>
            <p id="legendDescription">${passiveString}</p>
            <p id="legendDescriptionDisplay">${tacticalString}</p>
        </div>
      </div>
      `;
      markupArrayOfLegends = markupArrayOfLegends + element;
    });
    apexGrid.innerHTML = markupArrayOfLegends;
    const legend = document.querySelectorAll(".legend");
    for (const legends of legend) {
      legends.addEventListener("click", (e) => {
        console.log(e.target)
        const legendDiv = e.target.closest("img");
        const selectedLegegend = e.target.closest("div");
        selectedLegegend.classList.toggle("selected");
        const selectedLegend = legendsPicks.indexOf(legendDiv.dataset.id);
        if (selectedLegend === -1) {
          legendsPicks.push(legendDiv.dataset.id);
          add(legendDiv.dataset.id);
        } else {
          legendsPicks.splice(selectedLegend, 1);
          remove()
        }
        newLegendArray = legendsPicks;
      });
    }
  })
);

// function legendClicked() {
//   const legend = document.querySelectorAll(".legend");
//   for (const legends of legend) {
//     legends.addEventListener("click", (e) => {
//       console.log(e.target)
//       const legendDiv = e.target.closest("img");
//       const selectedLegegend = e.target.closest("div");
//       selectedLegegend.classList.toggle("selected");
//       const selectedLegend = legendsPicks.indexOf(legendDiv.dataset.id);
//       if (selectedLegend === -1) {
//         legendsPicks.push(legendDiv.dataset.id);
//         add(legendDiv.dataset.id);
//       } else {
//         legendsPicks.splice(selectedLegend, 1);
//         remove()
//       }
//       newLegendArray = legendsPicks;
//     });
//   }
// }

function randomLegend() {
  randomButton.addEventListener("click", (e) => {
    var legendPicked = Math.floor(Math.random() * newLegendArray.length);
    var value = newLegendArray[legendPicked]
    console.log(value)
    console.log(legendPicked)
    document.getElementById("legendBox").style.display = "flex";
    fetch(apexUrl).then((response) =>
      response.json().then((data) => {
        const myLegend = `
        <div class="innerLegendBox">
          <span>The Legend you chose is ${data.legends[value - 1].name} </span>
        </div>
    `;
        legendBox.innerHTML = myLegend;
      })
    );
  });
}
randomLegend();

function add (x){
  fetch(apexUrl).then((response) =>
  response.json().then((data) => {
    // console.log(data.theLegend[`${theLegend.id}`].name)
    legendInBox.push(data.legends[x - 1].name)
    console.log(legendInBox)
    console.log(x)
  }))
}


const observer = new PerformanceObserver((list) => {
  console.log("Long Task detected! 🚩️");
  const entries = list.getEntries();
  console.log(entries);
});

observer.observe({ entryTypes: ["longtask"] });


      // console.log(legendInBox)


        // const insideLegendBox = `
        //   <span>
        //     ${data.legends[numba - 1].name}
        //   </span>
        // `
        // box.innerHTML = insideLegendBox;