import './App.css';
import {Route, Switch,} from 'react-router-dom'
import Header from './Navigation.js/Header';
import Navbar from './Navigation.js/Navbar';
import Home from './Navigation.js/Home';
import Footer from './Navigation.js/Footer';
import GameDetails from './GameContainer.js/GameDetails';
import GameCards from './GameContainer.js/GameCards';
import GenreDetails from './GenreContainer.js/GenreDetails';
import GenreCards from './GenreContainer.js/GenreCards';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import GameForm from './GameContainer.js/GameForm';
import GenreForm from './GenreContainer.js/GenreForm';
import About from './Navigation.js/About';


function App() {

  const history = useHistory();

  const [games , setGames] = useState([]);
  const [genres, setGenres] = useState([]);
  const [gameDetail, setGameDetail] = useState([]);
  const [genreDetail, setGenreDetail] = useState([]);
  const [gameform, setGameForm] = useState(true);
  const [genreform, setGenreForm] = useState(true);

  useEffect(() => {
    fetch("http://localhost:9292/games")
    .then(r => r.json())
    .then((data) => setGames(data))
    .catch((error) => alert(error))
  }, [])

  useEffect(() => {
    fetch("http://localhost:9292/genres")
    .then(r => r.json())
    .then((data) => setGenres(data))
    .catch((error) => alert(error))
  }, [])

  const gamecards = games.map((game) => {
    return (
      <div key={game.id}>
        <GameCards game={game} handleGameDetails={handleGameDetails}/>
      </div>
    )
  }) 

  const genrecards = genres.map((genre) => {
    return (
      <div key={genre.id}>
        <GenreCards genre={genre} handleGenreDetails={handleGenreDetails} />
      </div>
    )
  }) 

  function handleGenreDetails(genre){
    history.push(`/genres/${genre.id}`)
    setGenreDetail(genre)
  }

  function handleGameDetails(game){
    history.push(`/games/${game.id}`)
    setGameDetail(game)
  }

  function handleGameDelete(gameDetail){
    const deletedGame = games.filter((e) => e.id !== parseInt(gameDetail.id));

    fetch(`http://localhost:9292/games/${gameDetail.id}`, {
      method: "DELETE" 
    })

    setGames(deletedGame);

    history.push("/games");
    console.log(gameDetail)
  }
  
  function HandleUpdategame(updatedGameInfo){
    const deletedGame = games.filter((e) => e.id !== parseInt(updatedGameInfo.id));
    setGames([ updatedGameInfo, ...deletedGame ]);
  }

  function HandleAddGame(newGame){
    setGames([ newGame, ...games ])
  }

  function HandleAddGenre(newGenre){
    setGenres([ newGenre, ...genres ])
  }

  return (
    <div className="App">
        <Header></Header>
        <Navbar setGameForm={setGameForm} gameform={gameform} genreform={genreform} setGenreForm={setGenreForm}></Navbar>
        <Switch>
          <Route path="/games/:id">
            <GameDetails gameDetail={gameDetail} handleGameDelete={handleGameDelete} HandleUpdategame={HandleUpdategame}/>
          </Route>
          <Route path="/games">
              <h2>Games
                <span id='add' onClick={() => setGameForm((gameform) => !gameform)}>Add➕</span>
              </h2>
            {gameform ? (
              <div> {gamecards}</div>
              ): (
              <GameForm HandleAddGame={HandleAddGame} genres={genres} setGameForm={setGameForm} gameform={gameform}/>
            )}
          </Route>
          <Route path="/genres/:id">
            <GenreDetails genreDetail={genreDetail}/>
          </Route>
          <Route path="/genres">
              <h2>Genres
              <span id='add' onClick={() => setGenreForm((genreform) => !genreform)}>Add➕</span>
              </h2>
            {genreform ? (
              <div> {genrecards}</div>
              ): (
              <GenreForm HandleAddGenre={HandleAddGenre} genreform={genreform} setGenreForm={setGenreForm}/>
            )}
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
        <Footer/>
      
    </div>
  );
}

export default App;
