import { useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import MovieList from './components/movieList/MovieList';
import ToggleViewIcon from './components/toggleViewIcon/ToggleViewIcon';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css';

function App() {
  const { cardView, onFavoritesPage, currentSearch, favorites } = useStoreState(state => ({
    cardView: state.stored.cardView,
    onFavoritesPage: state.onFavoritesPage,
    currentSearch: state.currentSearch,
    favorites: state.stored.favorites
  }));

  const { setMovieResults, toggleOnFavoritesPage, setCurrentSearch } = useStoreActions(actions => ({
    setMovieResults: actions.setMovieResults,
    toggleOnFavoritesPage: actions.toggleOnFavoritesPage,
    setCurrentSearch: actions.setCurrentSearch
  }));

  useEffect(() => {
    const fav = document.querySelector('.favorites');
    if (!onFavoritesPage) {
      fav.style.setProperty("--favCount", `"${favorites.length}"`);
    }
  }, [favorites])

  useEffect(() => {
    const fav = document.querySelector('.favorites');
    if (!onFavoritesPage) {
      fav.style.setProperty("--favCount", `"${favorites.length}"`);
    }
  }, [onFavoritesPage])

  // If search bar is not empty:
  // Reset the current search
  // Fetch matching results (based on title)
  // Set the 'movieResults' state variable to the response

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

  // Bind enter key to the search button

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
            {/* Toggle 'onFavoritesPage' state variable between true and false. Change btn text based on state' */}
            <Button onClick={toggleOnFavoritesPage} variant="outline-secondary" className={onFavoritesPage ? 'back' : 'favorites'}>{onFavoritesPage ? 'Back' : 'Favorites'}</Button>
            <ToggleViewIcon />
          </div>
          <div className='searchAndFavorites'>
            {/* Either show 'Favorites' text or the search section depending on 'onFavoritesPage' state variable */}
            {
            onFavoritesPage
            ?
            <div className='favoritesContainer'>
              <h2 className='favText'>Favorites</h2>
            </div>
            :
            <div className='searchBoxContainer'>
              {/* Set 'currentSearch' state variable with input value */}
              <input onChange={(e) => setCurrentSearch(e.target.value)} value={currentSearch} className='searchBox' type='text' placeholder='Enter a movie' />
              <Button variant="outline-secondary" onClick={findMovies} className='enter'>Search</Button>
            </div>
            }
          </div>
        </div>
      </header>
      <div className='grid'>
        <div className='resultContainer'>
          {/* Choose results layout based on 'cardView' state variable */}
          <div className= {cardView ? 'cardContainer' : 'listContainer'}>
            <MovieList />
          </div>
        </div>
      </div>
      <footer>
      </footer>
    </div>
  );
}

export default App;
