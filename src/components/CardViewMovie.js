import { useState } from 'react';
import MoreInfo from './MoreInfo';
import './CardViewMovie.css';

const CardViewMovie = ({ movie }) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <div onClick={() => setModalShow(true)} className='cardViewBlock'>
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
            <MoreInfo movie={movie} show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}

export default CardViewMovie;
