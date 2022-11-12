import React from 'react'


function GameCards({game, handleDetails}) {
  return (
    <div>
      <ol>{game.name}</ol>
      <button onClick={() => handleDetails(game.id)}>Details</button>
    </div>
  )
}

export default GameCards