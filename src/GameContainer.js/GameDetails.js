import React, { useState } from 'react'
import EditGameDetalis from './EditGameDetails';


function GameDetails({gameDetail, handleGameDelete, HandleUpdategame}) {

  const [editDetail, seteditDetail] = useState(true);

  console.log(gameDetail)

  return (
    <div >
      {editDetail ? (
            <div id='display'>
              {/* <h2>{gameDetail.name}          
                <span onClick={() => seteditDetail((editDetail) => !editDetail)}>✏️</span>
              </h2>
              <p>{gameDetail.genre.name}</p>
              <p>Game Score: {gameDetail.score}</p>
              <p>Completion Percentage: {gameDetail.completion_percentage}</p>
              { gameDetail.platinum === "True"? <a href="https://emoji.gg/emoji/4858-platinum-trophy"><img src="https://cdn3.emoji.gg/emojis/4858-platinum-trophy.png" width="64px" height="64px" alt="platinum_trophy"/></a> : <></>}
              <p>Gaming Comments: {gameDetail.comment}</p>
              <button onClick={() => handleGameDelete(gameDetail)}>Delete Game ❌</button> */}
            </div>
      ) : (
          <div id='display'>
            {/* <h2>{gameDetail.name}          
              <span onClick={() => seteditDetail((editDetail) => !editDetail)}>✏️</span>
            </h2>
            <EditGameDetalis gameDetail={gameDetail} HandleUpdategame={HandleUpdategame}/> */}
          </div>
       )}
    </div>
  )
}

export default GameDetails