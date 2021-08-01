import ListViewMovie from './ListViewMovie';
import CardViewMovie from './CardViewMovie';
import { useStoreState } from 'easy-peasy';

const MovieList = () => {
    const { cardView, bySearch } = useStoreState(state => ({
        cardView: state.cardView,
        bySearch: state.bySearch
    }));

    return (
        <>
            {
              bySearch.map(movie => {
                return(
                    cardView
                    ? <CardViewMovie key={movie.imdbID} movie={movie} />
                    : <ListViewMovie key={movie.imdbID} movie={movie} />
                )
              })
            }
        </>
    )
}

export default MovieList;
