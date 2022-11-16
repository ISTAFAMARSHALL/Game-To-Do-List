import React, { useState } from "react";

function EditGameDetalis({gameDetail, HandleUpdategame}) {

  const [gameName, setgameName] = useState(gameDetail.name);
  const [gameScore, setgameScore] = useState(gameDetail.score);
  const [gameCompletionPercentage, setgameCompletionPercentage] = useState(gameDetail.completion_percentage);
  const [gamePlatinum, setgamePlatinum] = useState(gameDetail.platinum);
  const [gameComment, setgameComment] = useState(gameDetail.comment);

  const updatedGameInfo ={
    id: gameDetail.id,
    name: gameName,
    genre_id: gameDetail.genre_id,
    score: gameScore,
    completion_percentage: gameCompletionPercentage,
    platinum: gamePlatinum,
    comment:gameComment,
  }

  function handleGameUpdate(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/games/${gameDetail.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedGameInfo),
    })
      .then((r) => r.json())
      .then((updatedGameInfo) => HandleUpdategame(updatedGameInfo));
      // setgameName("")
      // setgameScore("")
      // setgameCompletionPercentage("")
      // setgamePlatinum("")
      // setgameComment("")
  }

  return (
    <form onSubmit={handleGameUpdate}>
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
