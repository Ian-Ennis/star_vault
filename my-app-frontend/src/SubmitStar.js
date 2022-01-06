import React from "react";

function SubmitStar({ addAstronomyData }) {
  return (
    <div className="new_discovery_form">
      <h4>Have you discovered a new possible star? Complete this form.</h4>
      <form onSubmit={(e) => addAstronomyData(e)}>
        <input type="text" name="name" placeholder="Star will be called?" />
        <input type="text" name="constellation" placeholder="Constellation" />
        <input type="float" name="distance" placeholder="Distance (ly)" />
        <input type="float" name="apparent_magnitude" placeholder="Magnitude" />
        <input type="number" name="temperature" placeholder="Temp in K" />
        <input type="number" name="planets" placeholder="# of planets?" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default SubmitStar;
