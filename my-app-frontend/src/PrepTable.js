import React from "react";
import RenderStars from "./RenderStars";

function PrepTable({ stars, popup, askToDelete }) {
  const table = stars.map((star) => {
    return (
      <tr key={star.id}>
        <td onClick={() => popup(star)}>{star.name}</td>
        <td>{star.Constellation.constellation_name}</td>
        <td>{star.distance}</td>
        <td>{star.apparent_magnitude}</td>
        <td>{star.temperature}</td>
        <td>{star.confirmed_planets}</td>
        <td><button onClick={(e) => askToDelete(e, star)}>Remove</button></td>
      </tr>
    );
  });

  return (
    <>
      <RenderStars table={table} />
    </>
  );
}

export default PrepTable;
