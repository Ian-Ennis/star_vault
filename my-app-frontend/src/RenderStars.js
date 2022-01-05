import React from "react";

function RenderStars({table}) {

    return (
        <div>
            <p id='star_title'>Welcome, seasoned astronomer! You have been granted access to remove stars from the database.</p>
            <table className='starTable'>
               <tbody>
                  {table}
               </tbody>
            </table>
         </div>
    )
}



export default RenderStars;