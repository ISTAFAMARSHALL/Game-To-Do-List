import React from 'react'


function GameCards({game, handleDetails}) {
  return (
    <div>
      <ol>{game.name}</ol>
      <button onClick={() => handleDetails(game)}>Details</button>
    </div>
  )
}

export default GameCards