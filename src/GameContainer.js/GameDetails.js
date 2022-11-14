import React from 'react'

function GameDetails({gameDetail,handleGameDelete}) {



  return (
    <div>Details
      <h2>{gameDetail.name}</h2>
      <p>{gameDetail.genre_id}</p>
      <p>{gameDetail.score}</p>
      <p>{gameDetail.completion_percentage}</p>
      <p>{gameDetail.platinum}</p>
      <p>{gameDetail.comment}</p>
      <button onClick={() => handleGameDelete(gameDetail)}>Delete Game ❌</button>
    </div>
  )
}

export default GameDetails