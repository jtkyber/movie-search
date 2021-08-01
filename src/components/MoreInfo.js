import { useStoreActions } from 'easy-peasy';
import { Modal, Button } from 'react-bootstrap';
import './MoreInfo.css';

const MoreInfo = (props) => {
  const m = props.movie;
  const addToFavorites = useStoreActions(actions => actions.addToFavorites);

  return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
      <div className='modalContainer' style={{backgroundImage: `url(${m.Poster})`}}>
        <div className='backgroundTint'>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {m.Title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='modalBody'>
              <h5>{m.Type} ({m.Year})</h5>
              <p>
                <b>Plot:</b> {m.Plot}
              </p>
              <p>
                <b>Actors:</b> {m.Actors}
              </p>
              <p>
                <b>Genre:</b> {m.Genre}
              </p>
              <p>
                <b>Director(s):</b> {m.Director}
              </p>
              <p>
                <b>Writer(s):</b> {m.Writer}
              </p>
              <p>
                <b>Production:</b> {m.Production}
              </p>
              <p>
                <b>Awards:</b> {m.Awards}
              </p>
              <p>
                <b>BoxOffice:</b> {m.BoxOffice}
              </p>
              <p>
                <b>Language:</b> {m.Language}
              </p>
              <p>
                <b>Rated:</b> {m.Rated}
              </p>
              <p>
                <b>IMDB Rating:</b> {m.imdbRating}
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success"
              onClick={() =>
                addToFavorites({poster: m.Poster, title: m.Title, type: m.Type, year: m.Year, imdbID: m.imdbID})
              }
              className='modalFavorite'>Add to Favorites</Button>
            <Button variant="secondary" onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </div>
      </div>
      </Modal>
  )
}

export default MoreInfo;
