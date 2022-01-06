import React from "react";

function RenderStars({ table }) {
  return (
    <div>
      <p id="star_title">
        Welcome, seasoned astronomer! You have been granted access to remove
        false stars from the database.
      </p>

      <table className="starTable">
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
    </div>
  );
}

export default RenderStars;
