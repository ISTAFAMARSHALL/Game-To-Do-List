import React, { useState } from 'react'
import EditGameDetalis from './EditGameDetails';


function GameDetails({gameDetail, handleGameDelete, HandleUpdategame}) {

  const [editDetail, seteditDetail] = useState(true);



  return (
    <div>
      {editDetail ? (
            <div>
              <h2>{gameDetail.name}          
                <a onClick={() => seteditDetail((editDetail) => !editDetail)}>✏️</a>
              </h2>
              <p>{gameDetail.genre_id}</p>
              <p>{gameDetail.score}</p>
              <p>{gameDetail.completion_percentage}</p>
              <p>{gameDetail.platinum}</p>
              <p>{gameDetail.comment}</p>
              <button onClick={() => handleGameDelete(gameDetail)}>Delete Game ❌</button>
            </div>
      ) : (
          <div>
            <h2>{gameDetail.name}          
              <a onClick={() => seteditDetail((editDetail) => !editDetail)}>✏️</a>
            </h2>
            <EditGameDetalis gameDetail={gameDetail} HandleUpdategame={HandleUpdategame}/>
          </div>
       )}
    </div>
  )
}

export default GameDetails