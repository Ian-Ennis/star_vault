import React from "react";
import RenderStars from "./RenderStars";
import ShowStars from "./ShowStars";

function PrepTable({ stars, handleDelete }) {
  console.log(stars)
  const table = stars.map((star) => {
    console.log(star)
    return (
      <tr key={star.id}>
        <td>{star.name}</td>
        <td>{star.Constellation.constellation_name}</td>
        <td>{star.distance}</td>
        <td>{star.apparent_magnitude}</td>
        <td>{star.temperature}</td>
        <td>{star.confirmed_planets}</td>
        <td><button onClick={(e) => handleDelete(e, star)}>Initiate supernova!</button></td>
      </tr>
    );
  });

  return (
    <div>
      <RenderStars table={table} />
      <ShowStars />
    </div>
  );
}

export default PrepTable;
