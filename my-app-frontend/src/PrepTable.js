import React from "react";
import RenderStars from "./RenderStars";

function PrepTable({constellations, stars, users, handleDelete}) {

  const table = stars.map(star => {
    return (
      <tr key={star.id}>
        <td>{star.name}</td>
        <td>{star.distance}</td>
        <td>{star.apparent_magnitude}</td>
        <td>{star.temperature}</td>        
        <td>{star.confirmed_planets}</td>
        <button onClick= {(e) => handleDelete(e, star)}>Initiate supernova!</button>
      </tr>
    )
  })


  return (
    <RenderStars table={table}/>
  )
  // return (
  //   <div>
  //     <button onClick= {(e) => handleDelete(e)}></button>
  //     <table id="star_table">
  //       <tbody>
  //         <tr id="star1">
  //           <td id="cell0-0">cell 0-0</td>
  //           <td id="cell0-1">cell 0-1</td>
  //           <td id="cell0-2">cell 0-2</td>
  //           <td id="cell0-3">cell 0-2</td>
  //           <td id="cell0-4">cell 0-2</td>
  //           <td id="cell0-5">cell 0-2</td>
  //           <td id="cell0-6">cell 0-2</td>
  //           <td id="cell0-7">cell 0-2</td>
  //         </tr>
  //         <tr id="star2">
  //           <td id="cell1-0">cell 1-0</td>
  //           <td id="cell1-1">cell 1-1</td>
  //           <td id="cell1-2">cell 1-2</td>
  //         </tr>
  //         <tr id="star3">
  //           <td id="cell2-0">cell2-0</td>
  //           <td id="cell2-1">cell2-1</td>
  //           <td id="cell2-2">cell2-2</td>
  //         </tr>
  //       </tbody>
  //     </table>
  //   </div>
  // );
}

export default PrepTable;
