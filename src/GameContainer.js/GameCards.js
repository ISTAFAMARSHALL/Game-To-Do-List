import React from 'react'
import { useHistory } from 'react-router-dom'


function GameCards({game,}) {

  const history = useHistory()

  return (
    <div id='display'>
      <ol onClick={() => {
        history.push(`/games/${game.id}`)
        }}>{game.name}
        { game.platinum === "True"? 
        <a href="https://emoji.gg/emoji/4858-platinum-trophy">
          <img src="https://cdn3.emoji.gg/emojis/4858-platinum-trophy.png" width="20px" height="20px" alt="platinum_trophy"/>
          </a> : <></>}
      </ol>
    </div>
  )
}

export default GameCards