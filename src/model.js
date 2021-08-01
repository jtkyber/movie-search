import { action, persist } from 'easy-peasy';

const model = {
    // State

    stored: persist(
        {
            cardView: false,
            favorites: [],
        },
        {
            storage: 'localStorage',
        }
    ),

    movieResults: [],
    selectedMovie: {},



    // Actions

    toggleCardView: action(state => {
        state.stored.cardView = !state.stored.cardView;
    }),

    setMovieResults: action((state, mList) => {
        state.movieResults = mList;
    }),

    setSelectedMovie: action((state, movie) => {
        state.selectedMovie = movie;
    }),

    addToFavorites: action((state, data) => {
        let movieFound = false;
        for (let m of state.stored.favorites) {
            if (m.imdbID === data.imdbID) {
                movieFound = true;
            }
        }
        if (!movieFound) {
            state.stored.favorites.push(
                {
                    Poster: data.poster,
                    Title: data.title,
                    Type: data.type,
                    Year: data.year,
                    imdbID: data.imdbID
                }
            )
        }
    }),
}

export default model;











// bySearch: [
//         {
//             Title: "The Lord of the Rings: The Fellowship of the Ring",
//             Year: "2001",
//             imdbID: "tt0120737",
//             Type: "movie",
//             Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
//         },
//         {
//             Title: "The Lord of the Rings: The Return of the King",
//             Year: "2003",
//             imdbID: "tt0167260",
//             Type: "movie",
//             Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
//         },
//         {
//             Title: "The Lord of the Rings: The Two Towers",
//             Year: "2002",
//             imdbID: "tt0167261",
//             Type: "movie",
//             Poster: "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
//         },
//         {
//             Title: "The Lord of the Rings: The Two Towers",
//             Year: "2002",
//             imdbID: "tt01672610",
//             Type: "movie",
//             Poster: "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
//         },
//         {
//             Title: "The Lord of the Rings: The Two Towers",
//             Year: "2002",
//             imdbID: "tt016726100",
//             Type: "movie",
//             Poster: "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
//         },
//         {
//             Title: "The Lord of the Rings: The Two Towers",
//             Year: "2002",
//             imdbID: "tt0167261000",
//             Type: "movie",
//             Poster: "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
//         },
//         {
//             Title: "The Lord of the Rings: The Two Towers",
//             Year: "2002",
//             imdbID: "tt01672610000",
//             Type: "movie",
//             Poster: "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
//         },
//         {
//             Title: "The Lord of the Rings: The Two Towers",
//             Year: "2002",
//             imdbID: "tt016726100000",
//             Type: "movie",
//             Poster: "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
//         }
//     ],
//     byIdOrTitle: [
//         {
//             Title: "The Lord of the Rings: The Fellowship of the Ring",
//             Year: "2001",
//             Rated: "PG-13",
//             Released: "19 Dec 2001",
//             Runtime: "178 min",
//             Genre: "Action, Adventure, Drama",
//             Director: "Peter Jackson",
//             Writer: "J.R.R. Tolkien, Fran Walsh, Philippa Boyens",
//             Actors: "Elijah Wood, Ian McKellen, Orlando Bloom",
//             Plot: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
//             Language: "English, Sindarin",
//             Country: "New Zealand, United States",
//             Awards: "Won 4 Oscars. 120 wins & 126 nominations total",
//             Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
//             Ratings: [
//                 {
//                     Source:"Internet Movie Database",
//                     Value:"8.8/10"
//                 },
//                 {
//                     Source:"Rotten Tomatoes",
//                     Value:"91%"
//                 },
//                 {
//                     Source:"Metacritic",
//                     Value:"92/100"
//                 },
//             ],
//             Metascore:"92",
//             imdbRating:"8.8",
//             imdbVotes:"1,706,179",
//             imdbID:"tt0120737",
//             Type:"movie",
//             DVD:"28 Jun 2011",
//             BoxOffice:"$315,710,750",
//             Production:"New Line Cinema, Saul Zaentz Company, WingNut Films"
//         },
//         {
//             Title: "The Lord of the Rings: The Fellowship of the Ring",
//             Year: "2001",
//             Rated: "PG-13",
//             Released: "19 Dec 2001",
//             Runtime: "178 min",
//             Genre: "Action, Adventure, Drama",
//             Director: "Peter Jackson",
//             Writer: "J.R.R. Tolkien, Fran Walsh, Philippa Boyens",
//             Actors: "Elijah Wood, Ian McKellen, Orlando Bloom",
//             Plot: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
//             Language: "English, Sindarin",
//             Country: "New Zealand, United States",
//             Awards: "Won 4 Oscars. 120 wins & 126 nominations total",
//             Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
//             Ratings: [
//                 {
//                     Source:"Internet Movie Database",
//                     Value:"8.8/10"
//                 },
//                 {
//                     Source:"Rotten Tomatoes",
//                     Value:"91%"
//                 },
//                 {
//                     Source:"Metacritic",
//                     Value:"92/100"
//                 },
//             ],
//             Metascore:"92",
//             imdbRating:"8.8",
//             imdbVotes:"1,706,179",
//             imdbID:"tt0120737",
//             Type:"movie",
//             DVD:"28 Jun 2011",
//             BoxOffice:"$315,710,750",
//             Production:"New Line Cinema, Saul Zaentz Company, WingNut Films"
//         },
//         {
//             Title: "The Lord of the Rings: The Fellowship of the Ring",
//             Year: "2001",
//             Rated: "PG-13",
//             Released: "19 Dec 2001",
//             Runtime: "178 min",
//             Genre: "Action, Adventure, Drama",
//             Director: "Peter Jackson",
//             Writer: "J.R.R. Tolkien, Fran Walsh, Philippa Boyens",
//             Actors: "Elijah Wood, Ian McKellen, Orlando Bloom",
//             Plot: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
//             Language: "English, Sindarin",
//             Country: "New Zealand, United States",
//             Awards: "Won 4 Oscars. 120 wins & 126 nominations total",
//             Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
//             Ratings: [
//                 {
//                     Source:"Internet Movie Database",
//                     Value:"8.8/10"
//                 },
//                 {
//                     Source:"Rotten Tomatoes",
//                     Value:"91%"
//                 },
//                 {
//                     Source:"Metacritic",
//                     Value:"92/100"
//                 },
//             ],
//             Metascore:"92",
//             imdbRating:"8.8",
//             imdbVotes:"1,706,179",
//             imdbID:"tt0120737",
//             Type:"movie",
//             DVD:"28 Jun 2011",
//             BoxOffice:"$315,710,750",
//             Production:"New Line Cinema, Saul Zaentz Company, WingNut Films"
//         }
//     ],
