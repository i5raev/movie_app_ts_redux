import {combineReducers} from "redux";
import {popularMoviesReducer} from "./popularMoviesReducer";
import {movieDetailReducer} from "./movieDetailReducer";
import {searchMoviesReducer} from "./searchMoviesReducer";
import {genresReducer} from "./genresReducer";
import {recommendedMoviesReducer} from "./recommendedMoviesReducer";

export const rootReducer = combineReducers({
    movies: popularMoviesReducer,
    movieDetail: movieDetailReducer,
    searchMovies: searchMoviesReducer,
    genres: genresReducer,
    recommended_movies: recommendedMoviesReducer,
})

export type RootState = ReturnType<typeof rootReducer>
