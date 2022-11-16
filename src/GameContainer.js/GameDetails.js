import React, { useState } from 'react'
import EditGameDetalis from './EditGameDetails';


function GameDetails({gameDetail, handleGameDelete, HandleUpdategame}) {

  const [editDetail, seteditDetail] = useState(true);



  return (
    <div >
      {editDetail ? (
            <div id='display'>
              <h2>{gameDetail.name}          
                <span onClick={() => seteditDetail((editDetail) => !editDetail)}>✏️</span>
              </h2>
              <p>{gameDetail.genre_id}</p>
              <p>Game Score: {gameDetail.score}</p>
              <p>Completion Percentage: {gameDetail.completion_percentage}</p>
              <p>Platinum Achieved? {gameDetail.platinum}</p>
              <p>Gaming Comments: {gameDetail.comment}</p>
              <button onClick={() => handleGameDelete(gameDetail)}>Delete Game ❌</button>
            </div>
      ) : (
          <div id='display'>
            <h2>{gameDetail.name}          
              <span onClick={() => seteditDetail((editDetail) => !editDetail)}>✏️</span>
            </h2>
            <EditGameDetalis gameDetail={gameDetail} HandleUpdategame={HandleUpdategame}/>
          </div>
       )}
    </div>
  )
}

export default GameDetails