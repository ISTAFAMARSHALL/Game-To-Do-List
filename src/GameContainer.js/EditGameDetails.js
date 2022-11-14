import React, { useState } from "react";

function EditGameDetalis({gameDetail}) {

  const [gameName, setgameName] = useState(gameDetail.name);
  const [gameScore, setgameScore] = useState(gameDetail.score);
  const [gameCompletionPercentage, setgameCompletionPercentage] = useState(gameDetail.completion_percentage);
  const [gamePlatinum, setgamePlatinum] = useState(gameDetail.platinum);
  const [gameComment, setgameComment] = useState(gameDetail.comment);

  const updatedGameInfo ={
    name: gameName,
    genre_id: gameDetail.id,
    score: gameScore,
    completion_percentage: gameCompletionPercentage,
    platinum: gamePlatinum,
    comment:gameComment,
  }


  function handleAddGame(e) {
    e.preventDefault();
    console.log(updatedGameInfo)

    fetch(`http://localhost:9290/games/${gameDetail.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: updatedGameInfo,
      }),
    })
      .then((r) => r.json())
      // .then((updatedGameInfo) => onUpdateMessage(updatedGameInfo));
      
  }

  return (
    <form onSubmit={handleAddGame}>
      <input 
        type="text" 
        name="gameInfo" 
        value={gameName}
        onChange={(e) => setgameName(e.target.value)}
      />
      <input 
        type="text" 
        name="gameInfo" 
        value={gameScore}
        onChange={(e) => setgameScore(e.target.value)}
      />
      <input 
        type="text" 
        name="gameInfo" 
        value={gameCompletionPercentage}
        onChange={(e) => setgameCompletionPercentage(e.target.value)}
      />
      <input 
        type="text" 
        name="gameInfo" 
        value={gamePlatinum}
        onChange={(e) => setgamePlatinum(e.target.value)}
      />
      <input 
        type="text" 
        name="gameInfo" 
        value={gameComment}
        onChange={(e) => setgameComment(e.target.value)}
      />
      <input type="submit" value="Save" />
    </form>
  );
}

export default EditGameDetalis;
