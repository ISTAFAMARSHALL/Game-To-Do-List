import './App.css';
import {Route, Switch,} from 'react-router-dom'
import Header from './Navigation.js/Header';
import Navbar from './Navigation.js/Navbar';
import Home from './Navigation.js/Home';
import Footer from './Navigation.js/Footer';
import GameDetails from './GameContainerFolder/GameDetails';
import GenreDetails from './GenreContainerFolder/GenreDetails';
import { useState, useEffect } from 'react';
import About from './Navigation.js/About';
import GameContainer from './GameContainerFolder/GameContainer';
import GenreContainer from './GenreContainerFolder/GenreContainer';

function App() {

  const [games , setGames] = useState([]);
  const [genres, setGenres] = useState([]);
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

  return (
    <div className="App">
        <Header></Header>
        <Navbar setGameForm={setGameForm} gameform={gameform} genreform={genreform} setGenreForm={setGenreForm}></Navbar>
        <Switch>
          <Route path="/games/:id">
            <GameDetails games={games} genres={genres} setGenres={setGenres} setGames={setGames} />
          </Route>
          <Route path="/games">
            <GameContainer games={games} genres={genres} setGenres={setGenres} setGames={setGames} gameform={gameform} setGameForm={setGameForm}/>
          </Route>
          <Route path="/genres/:id">
            <GenreDetails genres={genres} />
          </Route>
          <Route path="/genres">
            <GenreContainer genres={genres} setGenres={setGenres} genreform={genreform} setGenreForm={setGenreForm}/>
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
