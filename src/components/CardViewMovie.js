import { useState } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import MoreInfo from './MoreInfo';
import './CardViewMovie.css';

const CardViewMovie = ({ movie }) => {
    const [modalShow, setModalShow] = useState(false);
    const { selectedMovie, onFavoritesPage} = useStoreState(state => ({
        selectedMovie: state.selectedMovie,
        onFavoritesPage: state.onFavoritesPage
    }));
    const { removeFromFavorites, setSelectedMovie} = useStoreActions(actions => ({
        removeFromFavorites: actions.removeFromFavorites,
        setSelectedMovie: actions.setSelectedMovie
    }));

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

    return (
        <>
            <div onClick={getMovieInfo} className='cardViewBlock'>
            {
                onFavoritesPage
                ? <button onClick={() => removeFromFavorites(movie.imdbID)} className='quickRemoveCard'>X</button>
                : null
            }
                <div className='cardPoster'>
                    <img src={movie.Poster} alt='poster' />
                </div>
                <div className='cardTitle'>
                    <h5>{movie.Title}</h5>
                </div>
                <div className='cardType'>
                    <h6>{movie.Type}</h6>
                </div>
                <div className='cardYear'>
                    <h6>{movie.Year}</h6>
                </div>
            </div>
            <MoreInfo movie={selectedMovie} show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}

export default CardViewMovie;
