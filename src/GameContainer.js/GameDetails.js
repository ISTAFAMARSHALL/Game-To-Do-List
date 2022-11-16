import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import EditGameDetalis from './EditGameDetails';


function GameDetails({games, handleGameDelete, HandleUpdategame}) {

  const [editDetail, seteditDetail] = useState(true);

  const parId = useParams()

  const game = games.filter((game) => game.id === parseInt(parId.id), [games])

  const gameInfo = game.map((e) =>{
    return (
      <div key={e.id}>
        {editDetail ? (
        <div id='display'>
            <h2>{e.name}
              <span onClick={() => seteditDetail((editDetail) => !editDetail)}>✏️</span>
            </h2>
            <h3>{e.genre.name}</h3>
            <p>Game Score: {e.score}</p>
            <p>Completion Percentage: {e.completion_percentage}</p>
            { e.platinum === "True"? <a href="https://emoji.gg/emoji/4858-platinum-trophy"><img src="https://cdn3.emoji.gg/emojis/4858-platinum-trophy.png" width="64px" height="64px" alt="platinum_trophy"/></a> : <></>}
            <p>Gaming Comments: {e.comment}</p>
            <button onClick={() => handleGameDelete(e)}>Delete Game ❌</button>
        </div>
        ) : (
        <div id='display'>
                <h2>{e.name}          
                  <span onClick={() => seteditDetail((editDetail) => !editDetail)}>✏️</span>
                </h2>
                <EditGameDetalis game={e} HandleUpdategame={HandleUpdategame}/>
        </div>
        )}
      </div>
    )
    })

  return (
    <div >
      {gameInfo}
    </div>
  )
}

export default GameDetails