import {SearchMoviesAction, SearchMoviesActionTypes, SearchMoviesState} from "../../types/searchMovies";

const initialState : SearchMoviesState = {
    movies: {
        page: 1,
        results: [{
            poster_path: null,
            adult: false,
            overview: '',
            release_date: '',
            genre_ids: [1],
            id: 1,
            original_title: '',
            original_language: '',
            title: '',
            backdrop_path: null,
            popularity: 1,
            vote_count: 1,
            video: false,
            vote_average: 1,
        }],
        total_pages: 1,
        total_results: 1,
    },
    page: 1,
    error: null,
    loading: false,
}

export const searchMoviesReducer = (state = initialState, action: SearchMoviesAction): SearchMoviesState => {
    switch (action.type) {
        case SearchMoviesActionTypes.FETCH_SEARCH_MOVIES:
            return {...state, loading: true}
        case SearchMoviesActionTypes.FETCH_SEARCH_MOVIES_SUCCESS:
            return {...state, loading: false, movies: action.payload}
        case SearchMoviesActionTypes.FETCH_SEARCH_MOVIES_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}
