import './App.css';
import {Route, Switch} from 'react-router-dom'
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

function App() {

  const [games , setGames] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9290/games")
    .then(r => r.json())
    .then((data) => setGames(data))
    .catch((error) => alert(error))
  }, [])

  useEffect(() => {
    fetch("http://localhost:9290/genres")
    .then(r => r.json())
    .then((data) => setGenres(data))
    .catch((error) => alert(error))
  }, [])

  const gamecards = games.map((game) => {
    return (
      <div key={game.id}>
        <GameCards game={game} handleDetails={handleDetails}/>
      </div>
    )
  }) 

  const history = useHistory();

  function handleDetails(game_id){
    history.push()
    console.log(game_id)
  }

  return (
    <div className="App">
      
        <Header></Header>
        <Navbar></Navbar>
        <Switch>
          <Route path="/games/:id">
            <GameDetails />
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
      
    </div>
  );
}

export default App;
