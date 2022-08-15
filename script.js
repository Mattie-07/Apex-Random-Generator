const legendsPicks = [];
const legend = document.querySelectorAll(".legend");
let thisLegend = "";

for (const legends of legend) {
  legends.addEventListener("click", (e) => {
    console.log(legends.getAttribute("id"));
    if (legendsPicks.includes(e.target.id)) {
      console.log("working");
    }
    legendsPicks.push(e.target.id);
    console.log(legendsPicks);
  });
  legends.addEventListener("click", storeValue);
}

function storeValue(e) {}
//Next step is using something like an array method like remove to remove when the legend is click
