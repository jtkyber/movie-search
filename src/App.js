import { useState } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import MovieList from './components/MovieList';
import ToggleViewIcon from './components/ToggleViewIcon';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css';

function App() {
  const { cardView, onFavoritesPage } = useStoreState(state => ({
    cardView: state.stored.cardView,
    onFavoritesPage: state.onFavoritesPage
  }));

  const { setMovieResults, toggleOnFavoritesPage } = useStoreActions(actions => ({
    setMovieResults: actions.setMovieResults,
    toggleOnFavoritesPage: actions.toggleOnFavoritesPage
  }));

  const [currentSearch, setCurrentSearch] = useState('');

  const findMovies = async () => {
    if (currentSearch.length) {
      setCurrentSearch('');
      try {
        const res = await fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?s=${currentSearch}`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "387e27d97fmsh8e24e62224ddd7bp139e87jsn4629eff6112a",
          "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
        }
      })
        const movies = await res.json();
        setMovieResults(movies.Search);
      } catch(err) {
        console.log(err);
      }
    }
  }

  document.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      document.querySelector('.enter').click();
    }
  })

  return (
    <div className='appContainer'>
      <header>
        <div className='header'>
          <div className='headerItems'>
            <Button onClick={toggleOnFavoritesPage} variant="outline-secondary" className='favorites'>{onFavoritesPage ? 'Search' : 'Favorites'}</Button>
            <ToggleViewIcon />
          </div>
        </div>
      </header>
      <div className='grid'>
      {
        onFavoritesPage
        ?
        <div className='favoritesContainer'>
          <h2 className='favText'>Favorites</h2>
        </div>
        :
        <div className='searchBoxContainer'>
          <input onChange={(e) => setCurrentSearch(e.target.value)} value={currentSearch} className='searchBox' type='text' placeholder='Search for a movie, show, game, etc...' />
          <Button variant="outline-secondary" onClick={findMovies} className='enter'>Enter</Button>
        </div>
      }
        <div className='resultContainer'>
          <div className= {cardView ? 'cardContainer' : 'listContainer'}>
            <MovieList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
