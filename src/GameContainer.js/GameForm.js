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

        fetch("http://localhost:9290/games", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newGameInfo)
        })
          .then((r) => r.json())
          .then((newGame) => HandleAddGame(newGame));
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
      required placeholder='Enter Game Name Here'
      onChange={(e) => setgameName(e.target.value)}
    />
    <input 
      type="text" 
      name="gameInfo" 
      value={genreId}
      required placeholder='Enter Genre ID Here'
      onChange={(e) => setGenreId(e.target.value)}
    />
    <input 
      type="text" 
      name="gameInfo" 
      value={gameScore}
      placeholder='Game Score'
      onChange={(e) => setgameScore(e.target.value)}
    />
    <input 
      type="text" 
      name="gameInfo" 
      value={gameCompletionPercentage}
      placeholder='Enter Completion Percentage Here'
      onChange={(e) => setgameCompletionPercentage(e.target.value)}
    />
    <input 
      type="text" 
      name="gameInfo" 
      value={gamePlatinum}
      placeholder='Platinum Trophy Achieved'
      onChange={(e) => setgamePlatinum(e.target.value)}
    />
    <input 
      type="text" 
      name="gameInfo" 
      value={gameComment}
      placeholder='Enter Comments Here'
      onChange={(e) => setgameComment(e.target.value)}
    />
    <input type="submit" value="Save" />
  </form>
  )
}

export default GameForm