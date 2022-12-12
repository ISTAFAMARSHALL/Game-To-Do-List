import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import EditGameDetalis from './EditGameDetails';


function GameDetails({games, genres, setGenres, setGames}) {

  const history = useHistory();

  function handleGameDelete(gameDetail){

    const deletedGame = games.filter((e) => e.id !== parseInt(gameDetail.id));

    fetch(`http://localhost:9292/games/${gameDetail.id}`, {
      method: "DELETE" 
    })

    setGames(deletedGame);

    history.push("/games");
  }
  
  function handleUpdategame(updatedGameInfo){
    const filteredGames = games.filter((e) => e.id !== parseInt(updatedGameInfo.id));
    setGames([ updatedGameInfo, ...filteredGames ]);
  }

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
                <EditGameDetalis genres={genres} setGenres={setGenres} game={e} handleUpdategame={handleUpdategame}/>
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