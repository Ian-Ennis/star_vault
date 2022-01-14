import React from "react";

function RenderStars({ table }) {
  return (
    <div className="tableFlexContainer">
      <p id="welcome">
        Welcome, seasoned astronomer! You have been granted access to remove
        false stars from the database.
      </p>

      <table className="records">
        <tbody>
          <td>Name</td>
          <td>Constellation</td>
          <td>Distance (ly)</td>
          <td>Apparent Magnitude</td>
          <td>Temperature (K)</td>
          <td>Likely number of planets?</td>
          {table}
        </tbody>
      </table>
      <br/>
    </div>
  );
}

export default RenderStars;
