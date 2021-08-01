import { useState } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import MoreInfo from './MoreInfo';
import './ListViewMovie.css';

const ListViewMovie = ({ movie }) => {
    const [modalShow, setModalShow] = useState(false);
    const selectedMovie = useStoreState(state => state.selectedMovie);
    const setSelectedMovie = useStoreActions(actions => actions.setSelectedMovie);

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
          console.log(movieInfo);
        } catch(err) {
          console.log(err);
        }
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
            </div>
            <MoreInfo movie={selectedMovie} show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}

export default ListViewMovie;
