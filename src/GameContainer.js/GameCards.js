import React from 'react'


function GameCards({game, handleGameDetails}) {
  return (
    <div id='display'>
      <ol onClick={() => handleGameDetails(game)}>{game.name}</ol>
    </div>
  )
}

export default GameCards