import React from 'react'

function GameDetails({game}) {


  return (
    <div>
      <h2>{game.name}</h2>
      <p>{game.genre_id}</p>
      <p>{game.score}</p>
      <p>{game.completion_percentage}</p>
      <p>{game.platinum}</p>
      <p>{game.comment}</p>
    </div>
  )
}

export default GameDetails