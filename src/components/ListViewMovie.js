import { useState } from 'react';
import MoreInfo from './MoreInfo';
import './ListViewMovie.css';

const ListViewMovie = ({ movie }) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <div onClick={() => setModalShow(true)} className='listViewBlock'>
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
            <MoreInfo movie={movie} show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}

export default ListViewMovie;
