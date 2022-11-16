import React from 'react'


function GameCards({game, handleGameDetails}) {
  return (
    <div id='display'>
      <ol onClick={() => handleGameDetails(game)}>{game.name}{ game.platinum === "True"? <a href="https://emoji.gg/emoji/4858-platinum-trophy"><img src="https://cdn3.emoji.gg/emojis/4858-platinum-trophy.png" width="20px" height="20px" alt="platinum_trophy"/></a> : <></>}</ol>
    </div>
  )
}

export default GameCards