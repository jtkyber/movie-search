import { useState } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import MoreInfo from '../moreInfo/MoreInfo';
import './ListViewMovie.css';

const ListViewMovie = ({ movie }) => {
    // Modal doesn't working correctly when 'modalShow' is in easy-peasy
    const [modalShow, setModalShow] = useState(false);
    const { selectedMovie, onFavoritesPage, favorites} = useStoreState(state => ({
        selectedMovie: state.selectedMovie,
        onFavoritesPage: state.onFavoritesPage,
        favorites: state.stored.favorites
    }));
    const { removeFromFavorites, setSelectedMovie} = useStoreActions(actions => ({
        removeFromFavorites: actions.removeFromFavorites,
        setSelectedMovie: actions.setSelectedMovie
    }));

    // Fetch detailed info for a specific result
    // Set the 'selectedMovie' state variable to the response
    // Set the 'modalShow' state variable to true

    const getMovieInfo = async () => {
        try {
          const res = await fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?i=${movie.imdbID}`, {
          "method": "GET",
          "headers": {
            "x-rapidapi-key": "387e27d97fmsh8e24e62224ddd7bp139e87jsn4629eff6112a",
            "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
          }
        })
          const movieInfo = await res.json();
          setSelectedMovie(movieInfo);
          setModalShow(true);
        } catch(err) {
          console.log(err);
        }
      }

      const isOnFavoritesList = () => {
        for (let fav of favorites) {
            if (movie.imdbID === fav.imdbID) {
              return true;
            }
        }
        return false;
    }

    return (
        <>
            <div onClick={getMovieInfo} className='listViewBlock'>
                <div className='listPoster'>
                    <img src={movie.Poster} alt='poster' />
                </div>
                <div className='listTitle'>
                    <h5>{movie.Title}</h5>
                </div>
                <div className='listType'>
                    <h6>{movie.Type}</h6>
                </div>
                <div className='listYear'>
                    <h6>{movie.Year}</h6>
                </div>
                <div className='listFavIcon'>
                    <h1>{isOnFavoritesList() && !onFavoritesPage ? '*' : null}</h1>
                </div>
                {
                    // Add a quick remove button to each result if on favorites page
                    // On click, remove result from 'favorites' state variable
                    onFavoritesPage
                    ? <button onClick={() => removeFromFavorites(movie.imdbID)} className='quickRemoveList'>X</button>
                    : null
                }
            </div>
            {/* Bootstrap modal component */}
            <MoreInfo movie={selectedMovie} show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}

export default ListViewMovie;
