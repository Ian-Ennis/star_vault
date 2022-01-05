import React from "react";

function SubmitStar({ handleNewStar }) {
  return (
    <div className="new_discovery_form">
      <h4>
        Have you discovered a new possible star? Fill out this form as best you
        can.
      </h4>
      <form onSubmit={(e) => handleNewStar(e)}>
        <input type="text" name="username" placeholder="Enter username" />
        <input type="text" name="name" placeholder="Name of star" />
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