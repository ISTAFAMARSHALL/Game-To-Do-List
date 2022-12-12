import { useState } from 'react';

function GameForm({HandleAddGame, genres, setGenres, setGameForm, gameform}) {

    const [gameName, setgameName] = useState("");
    const [gameScore, setgameScore] = useState("");
    const [gameCompletionPercentage, setgameCompletionPercentage] = useState("");
    const [gamePlatinum, setgamePlatinum] = useState("");
    const [gameComment, setgameComment] = useState("");
    const [genreId, setGenreId] = useState("");

    const newGameInfo ={
        name: gameName,
        genre_id: genreId,
        score: gameScore,
        completion_percentage: gameCompletionPercentage,
        platinum: gamePlatinum,
        comment:gameComment,
        genre: []
      }

    function handleAddNewGame(e) {
        e.preventDefault();

        const filterGenres = genres.filter((e) => e.id !== parseInt(genreId));
        const newgenre = genres.filter((e) => e.id === parseInt(genreId));
        const newgenreGames = newgenre[0].games.map((g) => g)

        fetch("http://localhost:9292/games", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newGameInfo)
        })
          .then((r) => r.json())
          .then((newGame) => {

            const updatednewgenre = {
              id: parseInt(newgenre[0].id),
              name:newgenre[0].name,
              games:[...newgenreGames,newGameInfo]
            }

            setGenres([...filterGenres ,updatednewgenre])
            HandleAddGame(newGame)
          });
          setgameName("")
          setgameScore("")
          setgameCompletionPercentage("")
          setgamePlatinum("")
          setgameComment("")
          setGenreId("")
          setGameForm(!gameform)
      }

  return (
    <form id='display' onSubmit={handleAddNewGame}>

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
        <select defaultValue={""} required placeholder='Enter Game Name Here' onChange={(e) => setGenreId(e.target.value)}>
            <option value=""></option> 
            {genres.map((genre) => <option value={genre.id} key={genre.id}>{`${genre.name}`}</option>)}
        </select>
    </div>

    <div>
      <label>Game Score </label>
        <select defaultValue={""} required placeholder='Enter Game Name Here' onChange={(e) => setgameScore(e.target.value)}>
            <option value=""></option>
            <option value="0">Unrated</option>
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
          value={gameCompletionPercentage}
          placeholder='Enter Completion Percentage Here'
          onChange={(e) => setgameCompletionPercentage(e.target.value)}
        />
    </div>

    <div>
      <label>Platinum Trophy Achieved</label>
        <select defaultValue={""} required placeholder='Enter Game Name Here' onChange={(e) => setgamePlatinum(e.target.value)}>
            <option value=""></option>
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
  )
}

export default GameForm