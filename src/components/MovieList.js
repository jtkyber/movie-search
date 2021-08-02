import ListViewMovie from './ListViewMovie';
import CardViewMovie from './CardViewMovie';
import { useStoreState } from 'easy-peasy';

const MovieList = () => {
    const { cardView, movieResults, onFavoritesPage, favorites } = useStoreState(state => ({
        cardView: state.stored.cardView,
        movieResults: state.movieResults,
        onFavoritesPage: state.onFavoritesPage,
        favorites: state.stored.favorites
    }));

    const resultType = () => {
        if (onFavoritesPage) {
            return favorites
        } else return movieResults
    }

    return (
        <>
            {
            resultType() !== undefined
            ?
              resultType().map(movie => {
                return(
                    cardView
                    ? <CardViewMovie key={movie.imdbID} movie={movie} />
                    : <ListViewMovie key={movie.imdbID} movie={movie} />
                )
              })
              : null
            }
        </>
    )
}

export default MovieList;
