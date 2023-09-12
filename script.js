const legendsPicks = [];
const apexUrl = "legends.json";
const legendRole = document.createElement("span");
const legendCard = document.getElementsByClassName("legend");
const randomButton = document.getElementById("randomButton");
const theName = document.querySelector(".legendName");
const legendContainer = document.querySelector(".titleRole");
const apexGrid = document.querySelector(".apexGrid");
let legendInBox = [];
let legendPicked;
let markupArrayOfLegends = "";
const box = document.querySelector(".boxText");
let legend = document.querySelectorAll(".legend");
let newLegendArray = [];
const legendBox = document.querySelector("#legendBox");

fetch(apexUrl).then((response) =>
  response.json().then((data) => {
    console.log(data.legends);
    data.legends.forEach((legend) => {
      let result = JSON.stringify(legend.abilities[0].passive);
      let passiveString = result.substring(1, result.length - 1);
      let tacticalResult = JSON.stringify(legend.abilities[0].tactical);
      let tacticalString = tacticalResult.substring(
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
    let audios = document.querySelectorAll("audio");
    for (const legends of legend) {
      legends.addEventListener("click", (e) => {
        const legendDiv = e.target.closest("img");
        const selectedLegegend = e.target.closest("div");
        selectedLegegend.classList.toggle("selected");
        const selectedLegend = legendsPicks.indexOf(legendDiv.dataset.id);
        if (selectedLegend === -1) {
          box.innerHTML = "";
          legendsPicks.push(legendDiv.dataset.id);
          add(legendDiv.dataset.id);
        } else {
          legendsPicks.splice(selectedLegend, 1);
          legendInBox.splice(selectedLegend, 1);
          box.innerHTML = "";
          legendInBox.forEach((legend) => {
            box.innerHTML += `
    <li>
      ${legend}
    </li>`;
          });

          console.log(legendInBox);
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

const btn = document.querySelector("button");
function randomGenerator(number) {
  return Math.floor(Math.random() * (number + 1));
}
btn.addEventListener("click", (e) => {
  const randomColor = `rgb(${randomGenerator(255)}, ${randomGenerator(
    255
  )}, ${randomGenerator(255)})`;
  e.target.style.backgroundColor = randomColor;
});

function randomLegend() {
  randomButton.addEventListener("click", (e) => {
    let legendPicked = Math.floor(Math.random() * newLegendArray.length);
    let value = newLegendArray[legendPicked];
    console.log(value);
    console.log(legendPicked);
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

function add(x) {
  fetch(apexUrl).then((response) =>
    response.json().then((data) => {
      let legend = data.legends[x - 1].name;
      legendInBox = [...legendInBox, legend];
      let insideLegendBox = legendInBox
        .map(
          (item) => `
          <li>
          ${item}
          </li>
        `
        )
        .join("");

      console.log(legendInBox);
      box.innerHTML += insideLegendBox;
    })
  );
}
function remove(legend) {
  const legendList = document.getElementById("legend-list");
  const legendElements = legendList.getElementsByClassName("legend");
  for (let i = 0; i < legendElements.length; i++) {
    if (legendElements[i].textContent === legend) {
      legendList.removeChild(legendElements[i]);
      break;
    }
  }
}

const observer = new PerformanceObserver((list) => {
  console.log("Long Task detected! 🚩️");
  const entries = list.getEntries();
  console.log(entries);
});

observer.observe({ entryTypes: ["longtask"] });

document.addEventListener("DOMContentLoaded", function() {
  document.body.classList.add("loaded");
});


//below is code for having their be a soudn when their is a hover over:
// legends.addEventListener('mouseover', () =>{
//   [].forEach.call(audios,function(audio){
//     audio.play();
//   })
// },false)
// legends.addEventListener('mouseleave', function() {
//   clicking.pause();
//   clicking.currentTime = 0;
// }, false);

// legends.addEventListener('mouseover', function() {
//   clicking.play();
// }, false);

// legends.addEventListener('mouseleave', function() {
//   clicking.pause();
//   clicking.currentTime = 0;
// }, false);
const scrollToTopButton = document.getElementById('scrollToTopButton');

// Add a scroll event listener to show/hide the button
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Add a click event listener to scroll to the top when the button is clicked
scrollToTopButton.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});