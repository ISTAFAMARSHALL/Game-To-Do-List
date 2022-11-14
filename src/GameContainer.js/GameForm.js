import { useState } from 'react';

function GameForm({HandleAddGame}) {

    const [gameName, setgameName] = useState();
    const [gameScore, setgameScore] = useState();
    const [gameCompletionPercentage, setgameCompletionPercentage] = useState();
    const [gamePlatinum, setgamePlatinum] = useState();
    const [gameComment, setgameComment] = useState();
    const [genreId, setGenreId] = useState();

    const newGameInfo ={
        name: gameName,
        genre_id: "",
        score: gameScore,
        completion_percentage: gameCompletionPercentage,
        platinum: gamePlatinum,
        comment:gameComment,
    }

    function handleAddNewGame(e) {
        e.preventDefault();
        console.log(newGameInfo)
    
        fetch("http://localhost:9290/games", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newGameInfo)
        })
          .then((r) => r.json())
          .then((updatedGameInfo) => HandleAddGame(updatedGameInfo));
          // setgameName("")
          // setgameScore("")
          // setgameCompletionPercentage("")
          // setgamePlatinum("")
          // setgameComment("")
      }


  return (
    <form onSubmit={handleAddNewGame}>
    <input 
      type="text" 
      name="gameInfo" 
      value={gameName}
      onChange={(e) => setgameName(e.target.value)}
    />
    <input 
      type="text" 
      name="gameInfo" 
      value={genreId}
      onChange={(e) => setGenreId(e.target.value)}
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
  )
}

export default GameForm