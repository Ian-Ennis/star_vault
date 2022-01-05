import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import SiteInfo from "./SiteInfo";
import PrepTable from "./PrepTable";
import SubmitStar from "./SubmitStar";

const constellationsAPI = "http://localhost:9292/constellations"
const starsAPI = "http://localhost:9292/stars"
const usersAPI = "http://localhost:9292/users"

function App() {
  const [constellations, setConstellations] = useState([]);
  const [stars, setStars] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(constellationsAPI)
    .then(r=>r.json())
    .then(setConstellations)
    .catch(err => {
      console.log(`${err.message} constellations`)
    })
  }, []);

  useEffect(() => {
    fetch(starsAPI)
    .then(r=>r.json())
    .then(setStars)
    .catch(err => {
      console.log(`${err.message} stars`)
    })
  }, []);
console.log(stars)
  useEffect(() => {
    fetch(usersAPI)
    .then(r=>r.json())
    .then(setUsers)
    .catch(err => {
      console.log(`${err.message} users`)
    })
  }, []);

  function handleDelete(e, star) {
    e.preventDefault();
    console.log(e.target)
    console.log(star.id)

    fetch(`http://localhost:9292/stars/${star.id}`, {
      method: "DELETE",
  })
  .then(r => r.json())
  .then(data => console.log(data));
    }

  function handleNewStar(e) {
    e.preventDefault()
    console.log(e.target.name.value)

    // <input type="text" name="username" placeholder="Enter username" />
    //     <input type="text" name="name" placeholder="Name of star" />
    //     <input type="text" name="constellation" placeholder="Constellation" />
    //     <input type="float" name="distance" placeholder="Distance (ly)" />
    //     <input type="float" name="apparent_magnitude" placeholder="Magnitude" />
    //     <input type="number" name="temperature" placeholder="Temp in K" />
    //     <input type="number" name="planets" placeholder="# of planets?" />
    //     <button type="submit">Submit</button>

      fetch(constellationsAPI, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json", 
        }, 
        body: JSON.stringify({
          name: e.target.name.value,
          distance: e.target.distance.value,
          apparent_magnitude: e.target.apparent_magnitude.value,
          temperature: e.target.temperature.value,
          confirmed_planets: e.target.planets.value,
        }),
      })
      .then(r=>r.json())
      .then(setConstellations);
  }

  return (
    <div className="App">
      <Header />
      <SiteInfo />
      <PrepTable constellations={constellations} stars={stars} users={users} handleDelete={handleDelete}/>
      <SubmitStar handleNewStar={handleNewStar}/>
    </div>
  );
}

export default App;
