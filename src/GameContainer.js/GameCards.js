import React from 'react'


function GameCards({game, handleGameDetails}) {
  return (
    <div>
      <ol>{game.name}</ol>
      <button onClick={() => handleGameDetails(game)}>Details</button>
    </div>
  )
}

export default GameCards