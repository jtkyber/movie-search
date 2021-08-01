import { useState } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import MovieList from './components/MovieList';
import ToggleViewIcon from './components/ToggleViewIcon';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const cardView = useStoreState(state => state.stored.cardView);
  const setMovieResults = useStoreActions(actions => actions.setMovieResults);
  const [currentSearch, setCurrentSearch] = useState('');

  const findMovies = async () => {
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

  return (
    <div className='appContainer'>
      <header>
        <div className='header'></div>
      </header>
      <div className='grid'>
        <div className='searchBoxContainer'>
          <input onChange={(e) => setCurrentSearch(e.target.value)} value={currentSearch} className='searchBox' type='text' placeholder='Search for a Movie' />
          <button onClick={findMovies} className='enter'>Enter</button>
          <button className='favorites'>Favorites</button>
          <ToggleViewIcon />
        </div>
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
