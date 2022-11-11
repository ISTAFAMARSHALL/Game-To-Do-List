import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Navigation.js/Header';
import Navbar from './Navigation.js/Navbar';
import Home from './Navigation.js/Home';
import Footer from './Navigation.js/Footer';
import GameDetails from './GameContainer.js/GameDetails';
import GameCards from './GameContainer.js/GameCards';
import GenreDetails from './GenreContainer.js/GenreDetails';
import GenreCards from './GenreContainer.js/GenreCards';
import { useState, useEffect } from 'react';

function App() {

  const [games , setGames] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9291/games")
    .then(r => r.json())
    .then((data) => setGames(data))
    .catch((error) => alert(error))
  }, [])

  useEffect(() => {
    fetch("http://localhost:9291/genres")
    .then(r => r.json())
    .then((data) => setGenres(data))
    .catch((error) => alert(error))
  }, [])

  const gamecards = games.map((game) => {
    return (
      <div key={game.id}>
        <GameCards game={game}/>
      </div>
    )
  }) 


  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Navbar></Navbar>
        <Switch>
          <Route path="/games/:id">
            <GameDetails/>
          </Route>
          <Route path="/games">
            {gamecards}
          </Route>
          <Route path="/genres/:id">
            <GenreDetails/>
          </Route>
          <Route path="/genres">
            <GenreCards/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
