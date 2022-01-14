import React from "react";

function SubmitStar({ addAstronomyData, askToAdd }) {
  return (
    <div className="new_discovery_form_flex_container">
      <h4>Have you discovered a new possible star? Complete this form.</h4>
      <form onSubmit={(e) => addAstronomyData(e)} onSubmit={(e) => askToAdd(e)}>
        <input type="text" name="name" placeholder="Name your star:" />
        <input type="text" name="constellation" placeholder="In which constellation?" />
        <input type="float" name="distance" placeholder="Distance (lightyears)" />
        <input type="float" name="apparent_magnitude" placeholder="Magnitude" />
        <input type="number" name="temperature" placeholder="Temperature (Kelvin)" />
        <input type="number" name="planets" placeholder="# of planets?" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default SubmitStar;
