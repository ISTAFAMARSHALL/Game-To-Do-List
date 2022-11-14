import React from 'react'

function GameForm({HandleAddGame}) {

    const [gameName, setgameName] = useState(gameDetail.name);
    const [gameScore, setgameScore] = useState(gameDetail.score);
    const [gameCompletionPercentage, setgameCompletionPercentage] = useState(gameDetail.completion_percentage);
    const [gamePlatinum, setgamePlatinum] = useState(gameDetail.platinum);
    const [gameComment, setgameComment] = useState(gameDetail.comment);

    const newGameInfo ={
        name: gameName,
        genre_id: gameDetail.genre_id,
        score: gameScore,
        completion_percentage: gameCompletionPercentage,
        platinum: gamePlatinum,
        comment:gameComment,
    }

    function handleAddNewGame(e) {
        e.preventDefault();
        console.log(newGameInfo)
    
        fetch(`http://localhost:9290/games/${gameDetail.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            body: newGameInfo,
          }),
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
    <div>GameForm</div>
  )
}

export default GameForm