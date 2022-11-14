import React, { useState } from "react";

function EditGameDetalis({gameDetail}) {

  const [gameInfo, setgameInfo] = useState(gameDetail);

  function handleAddGame(e) {
    e.preventDefault();

    fetch(`http://localhost:9290/games/${gameDetail.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: gameInfo,
      }),
    })
      .then((r) => r.json())
      // .then((updatedGameInfo) => onUpdateMessage(updatedGameInfo));
  }
  console.log(gameInfo)
  return (
    <form className="edit-message" onSubmit={handleAddGame}>
      <input 
        type="text" 
        name="gameInfo" 
        value={gameInfo.name}
        onChange={(e) => setgameInfo(e.target.value)}
      />
      <input 
        type="text" 
        name="gameInfo" 
        value={gameInfo.score}
        onChange={(e) => setgameInfo(e.target.value)}
      />
      <input 
        type="text" 
        name="gameInfo" 
        value={gameInfo.completion_percentage}
        onChange={(e) => setgameInfo(e.target.value)}
      />
      <input 
        type="text" 
        name="gameInfo" 
        value={gameInfo.platinum}
        onChange={(e) => setgameInfo(e.target.value)}
      />
      <input 
        type="text" 
        name="gameInfo" 
        value={gameInfo.comment}
        onChange={(e) => setgameInfo(e.target.value)}
      />
      <input type="submit" value="Save" />
    </form>
  );
}

export default EditGameDetalis;
