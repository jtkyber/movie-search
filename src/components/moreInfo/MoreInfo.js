import { useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Modal, Button } from 'react-bootstrap';
import './MoreInfo.css';

const MoreInfo = (props) => {
  const m = props.movie;
  const { favorites, isFavorite } = useStoreState(state => ({
    favorites: state.stored.favorites,
    isFavorite: state.isFavorite
  }));
  const {addToFavorites, removeFromFavorites, setIsFavorite} = useStoreActions(actions => ({
    addToFavorites: actions.addToFavorites,
    removeFromFavorites: actions.removeFromFavorites,
    setIsFavorite: actions.setIsFavorite
  }));

  // Whenever modal is shown, check if that result is inside 'favorites' state variable
  // Set the 'isFavorite' state variable

  useEffect(() => {
    if (props.show === true)
    {
      for (let movie of favorites) {
        if (m.imdbID === movie.imdbID) {
          return setIsFavorite(true);
        }
      }
      setIsFavorite(false);
    }
  }, [props.show])

  // Add (only necessary keys and values) or remove result to/from favorites based on 'isFavorite' state variable
  // Update 'setIsFavorite' state variable

  const updateFavorites = () => {
    if(!isFavorite) {
      addToFavorites({poster: m.Poster, title: m.Title, type: m.Type, year: m.Year, imdbID: m.imdbID})
      setIsFavorite(true);
    } else {
      removeFromFavorites(m.imdbID);
      setIsFavorite(false);
    }
  }

  return (
      //Bootstrap modal
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
                <b>Box Office:</b> {m.BoxOffice}
              </p>
              <p>
                <b>Language(s):</b> {m.Language}
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
            {/* Set btn appearance based on 'isFavorite' state variable. Add/remove from favorites on click */}
            <Button
              variant={!isFavorite ? "success" :  "danger"}
              onClick={updateFavorites}
              className={!isFavorite ? "addfavoriteBtn" :  "removefavoriteBtn"}>
              {!isFavorite ? 'Add to Favorites' :  "Remove from Favorites"}
              </Button>
            <Button variant="secondary" onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </div>
      </div>
      </Modal>
  )
}

export default MoreInfo;
