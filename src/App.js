import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Legend from "./Legends";
import GroupedLegendClass from "./GroupedLegendClass";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Nav";

function App() {
  const [selectedClass, setClass] = useState(
    JSON.parse(localStorage.getItem("selectedClass")),
    "Assault"
  );

  const [legends, setLegend] = useState(
    JSON.parse(localStorage.getItem("legendList")) || [
      {
        id: 1,
        name: "Lifeline",
        role: "Combat Medic",
        legendImage: "./images/Lifeline.jpg",
        classIcon: "",
        abilities: [
          {
            passive:
              "Combat Medic: Lifeline's passive allows her to tap a knocked teammate in order to revive them, freeing her to continue fighting.",
            tactical:
              "D.O.C Healing Drone: After being deployed,  D.O.C. will heal everyone around it at a rate of eight health per second up to a maximum of 150 health.",
            ultimate:
              "Care Package: Call down a care package from the sky to bring your team an assortment of 'smart' loot to bolster your loadout.",
          },
        ],
      },
      {
        id: 2,
        name: "Bangalore",
        role: "Professional Soldier",
        legendImage: "./images/Bangalore.jpg",
        classIcon: "",
        abilities: [
          {
            passive: "",
            tactical: "",
            ultimate: "",
          },
        ],
      },
      {
        id: 3,
        name: "Octane",
        role: "Speed Daredevil",
        legendImage: "./images/octane.jpg",
        classIcon: "",
        abilities: [
          {
            passive: "",
            tactical: "",
            ultimate: "",
          },
        ],
      },
      {
        id: 4,
        name: "Gibraltar",
        role: "Shielded Fortress",
        legendImage: "./images/gibby.jpg",
        classIcon: "",
        abilities: [
          {
            passive: "",
            tactical: "",
            ultimate: "",
          },
        ],
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("legendList", JSON.stringify(legends));
  }, [legends]);
  useEffect(() => {
    localStorage.setItem("selectedClass", JSON.stringify(selectedClass));
  }, [selectedClass]);

  function handleLegendSelectionChange(event) {
    console.log(event.target.value);
    setClass(event.target.value);
  }

  function handleLegendCardClick(event) {
    const transformedLegend = legends.map((legend) =>
      legend.id === parseInt(event.currentTarget.id)
        ? legend.role === selectedClass
          ? { ...legend, role: "" }
          : { ...legend, role: selectedClass }
        : legend
    );
    console.log(parseInt(event.currentTarget.id));
    setLegend(transformedLegend);
  }
  return (
    <>
      <Router>
        <Nav />
        <Header
          selectedClass={selectedClass}
          legendCount={
            legends.filter((legend) => legend.role === selectedClass).length
          }
        />
        <Routes>
          <Route
            path="/"
            element={
              <Legend
                legends={legends}
                selectedClass={selectedClass}
                handleLegendCardClick={handleLegendCardClick}
                handleLegendSelectionChange={handleLegendSelectionChange}
              />
            }
          ></Route>
          <Route
            path="/GroupedLegendClass"
            element={<GroupedLegendClass />}
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
