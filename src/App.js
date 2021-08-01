import react, { useState } from 'react';
import { useStoreState } from 'easy-peasy';
import MovieList from './components/MovieList';
import ToggleViewIcon from './components/ToggleViewIcon';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  // const cardView = useStoreState(state => state.cardView);
  const { cardView, bySearch } = useStoreState(state => ({
    cardView: state.cardView,
    bySearch: state.bySearch
  }));

  return (
    <div className='appContainer'>
      <header>
        <div className='header'></div>
      </header>
      <div className='grid'>
        <div className='searchBoxContainer'>
          <input className='searchBox' type='text' placeholder='Search for a Movie' />
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
