import {PopularMoviesAction, PopularMoviesActionTypes, PopularMoviesState} from "../../types/movies";

const initialState : PopularMoviesState = {
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

export const popularMoviesReducer = (state = initialState, action: PopularMoviesAction): PopularMoviesState => {
    switch (action.type) {
        case PopularMoviesActionTypes.FETCH_POPULAR_MOVIES:
            return {...state, loading: true}
        case PopularMoviesActionTypes.FETCH_POPULAR_MOVIES_SUCCESS:
            return {...state, loading: false, movies: action.payload}
        case PopularMoviesActionTypes.FETCH_POPULAR_MOVIES_ERROR:
            return {...state, loading: false, error: action.payload}
        case PopularMoviesActionTypes.SET_POPULAR_MOVIES_PAGE:
            return {...state, page: action.payload}
        default:
            return state
    }
}
