import { useState } from 'react';

function GameForm({HandleAddGame, genres}) {

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
    <select onChange={(e) => setGenreId(e.target.value)}>
                Select your Genre
            {genres.map((genre) => <option value ={genre.nam} key={genre.name}>{`${genre.name}`}</option>)}
    </select>
    <select onChange={(e) => setgameScore(e.target.value)}>
            Game Score
        <option value="Unrated">Unrated</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
    <input 
      type="text"
      value={gameCompletionPercentage}
      placeholder='Enter Completion Percentage Here'
      onChange={(e) => setgameCompletionPercentage(e.target.value)}
    />
    <select onChange={(e) => setgamePlatinum(e.target.value)}>
            Platinum Trophy Achieved
        <option value="False">False</option>
        <option value="True">True</option>
    </select>
    <input 
      type="text" 
      value={gameComment}
      placeholder='Enter Your Comments Here'
      onChange={(e) => setgameComment(e.target.value)}
    />
    <input type="submit" value="Save" />
  </form>
  )
}

export default GameForm