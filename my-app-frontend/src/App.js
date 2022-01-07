import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import SiteInfo from "./SiteInfo";
import PrepTable from "./PrepTable";
import SubmitStar from "./SubmitStar";
import Footer from "./Footer";


const constellationsAPI = "http://localhost:9292/constellations";
const starsAPI = "http://localhost:9292/stars";

function App() {
  const [constellation_hash, setConstellation_hash] = useState([]);
  const [star_hash, setStar_hash] = useState([]);

  useEffect(() => {
    fetch(constellationsAPI)
      .then((r) => r.json())
      .then(setConstellation_hash)
      .catch((err) => {
        console.log(`failed to fetch constellations`);
      });
  }, []);

  useEffect(() => {
    fetch(starsAPI)
      .then((r) => r.json())
      .then(setStar_hash)
      .catch((err) => {
        console.log(`failed to fetch stars`);
      });
  }, []);

  for (let i = 0; i < star_hash.length; i++) {
    star_hash[i]["Constellation"] = constellation_hash[i];
  }

  function handleDelete(e, star) {
    e.preventDefault();

    fetch(`http://localhost:9292/stars/${star.id}`, {
      method: "DELETE",
    })
      // .then((r) => r.json())
      // .then((data) => console.log(data));
  }

  function addAstronomyData(e) {
    
    handleNewConstellation(e)
    handleNewStar(e)

    function handleNewConstellation(e) {
      e.preventDefault();
      fetch(constellationsAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          constellation_name: e.target.constellation.value,
        }),
      })
        .then((r) => r.json())
        .then(setStar_hash);
    }

    function handleNewStar(e) {
      e.preventDefault();
      fetch(starsAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: e.target.name.value,
          distance: e.target.distance.value,
          apparent_magnitude: e.target.apparent_magnitude.value,
          temperature: e.target.temperature.value,
          confirmed_planets: e.target.planets.value,
        }),
      })
        .then((r) => r.json())
        .then(setStar_hash);
    }
  }

  return (
    <div className="App">
      <Header />
      <SiteInfo />
      <PrepTable stars={star_hash} handleDelete={handleDelete} />
      <SubmitStar addAstronomyData={addAstronomyData} />
      <Footer />
    </div>
  );
}

export default App;
