import React from 'react'

function GameCards({game}) {
  return (
    <div>
      <ol>{game.name}</ol>
    </div>
  )
}

export default GameCards