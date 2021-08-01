import ListViewMovie from './ListViewMovie';
import CardViewMovie from './CardViewMovie';
import { useStoreState } from 'easy-peasy';

const MovieList = () => {
    const { cardView, movieResults } = useStoreState(state => ({
        cardView: state.stored.cardView,
        movieResults: state.movieResults
    }));

    return (
        <>
            {
            movieResults !== undefined
            ?
              movieResults.map(movie => {
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
