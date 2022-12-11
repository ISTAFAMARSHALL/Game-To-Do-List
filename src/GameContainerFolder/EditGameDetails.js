import React, { useState } from "react";
import { useHistory } from 'react-router-dom'

function EditGameDetalis({game, genres, setGenres, HandleUpdategame}) {

  const history = useHistory();

  const [gameName, setgameName] = useState(`${game.name}`);
  const [gameScore, setgameScore] = useState(`${game.score}`);
  const [gameCompletionPercentage, setgameCompletionPercentage] = useState(`${game.completion_percentage}`);
  const [gamePlatinum, setgamePlatinum] = useState(`${game.platinum}`);
  const [gameComment, setgameComment] = useState(`${game.comment}`);
  const [gameGenre, setGameGenre] = useState(`${game.genre_id}`);
  const [oldGameGenre] = useState(`${game.genre_id}`);

  const updatedGameInfo ={
    id: game.id,
    name: gameName,
    genre_id: gameGenre,
    score: gameScore,
    completion_percentage: gameCompletionPercentage,
    platinum: gamePlatinum,
    comment:gameComment
  }

  const filterOldGenres = genres.filter((e) => e.id !== parseInt(oldGameGenre));
  const filterNewGenres = filterOldGenres.filter((e) => e.id !== parseInt(gameGenre));
  const oldgenre = genres.filter((e) => e.id === parseInt(oldGameGenre));
  const newgenre = genres.filter((e) => e.id === parseInt(gameGenre));
  const oldgenreGames = oldgenre[0].games.map((g) => g)
  const filteredOldGenreGames = oldgenreGames.filter((g) => g.id !== game.id )
  const newgenreGames = newgenre[0].games.map((g) => g)

  const updatedoldgenre = {
    id:oldgenre[0].id,
    name:oldgenre[0].name,
    games:filteredOldGenreGames
  }

  const updatednewgenre = {
    id:newgenre[0].id,
    name:newgenre[0].name,
    games:[...newgenreGames,updatedGameInfo]
  }

  function handleGameUpdate(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/games/${game.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedGameInfo),
    })
      .then((r) => r.json())
      .then((updatedGameInfo) => HandleUpdategame(updatedGameInfo));
      parseInt(oldGameGenre) === parseInt(gameGenre) ? setGenres([...filterOldGenres,...oldgenre]) : setGenres([...filterNewGenres,updatedoldgenre,updatednewgenre])
      history.push("/games")
  }

  return (
    <form onSubmit={handleGameUpdate}>
    
    <div>
      <label>Game Name </label>
        <input
          type="text" 
          name="gameInfo" 
          value={gameName}
          required placeholder='Enter Game Name Here'
          onChange={(e) => setgameName(e.target.value)}
        />
    </div>

    <div>
      <label>Select your Genre </label>
        <select defaultValue={gameGenre} onChange={(e) => setGameGenre(e.target.value)}>
            {genres.map((genre) => <option value={genre.id} key={genre.id}>{`${genre.name}`}</option>)}
        </select>
    </div>

    <div>
      <label>Game Score </label>
        <select value={gameScore} onChange={(e) => setgameScore(e.target.value)}>
            <option value="Unrated">Unrated</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </div>

    <div>
      <label>Completion Percentage </label>
        <input 
        type="text" 
        name="gameInfo" 
        value={gameCompletionPercentage}
        onChange={(e) => setgameCompletionPercentage(e.target.value)}
      />
    </div>

    <div>
      <label>Platinum Trophy Achieved </label>
        <select value={gamePlatinum} onChange={(e) => setgamePlatinum(e.target.value)}>
            <option value="False">False</option>
            <option value="True">True</option>
        </select>
    </div>

    <div>
      <label>Comments </label>
        <input 
          type="text" 
          value={gameComment}
          placeholder='Enter Your Comments Here'
          onChange={(e) => setgameComment(e.target.value)}
    />
    </div>
      <button type="submit" value="Save">Save</button>
    </form>
  );
}

export default EditGameDetalis;
