import {
    RecommendedMoviesAction,
    RecommendedMoviesActionTypes,
    RecommendedMoviesState
} from "../../types/recommended_movies";

const initialState : RecommendedMoviesState = {
    recommended_movies: {
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
    },
    page: 1,
    error: null,
    loading: false,
}

export const recommendedMoviesReducer = (state = initialState, action: RecommendedMoviesAction): RecommendedMoviesState => {
    switch (action.type) {
        case RecommendedMoviesActionTypes.FETCH_RECOMMENDED_MOVIES:
            return {...state, loading: true}
        case RecommendedMoviesActionTypes.FETCH_RECOMMENDED_MOVIES_SUCCESS:
            return {...state, loading: false, recommended_movies: action.payload}
        case RecommendedMoviesActionTypes.FETCH_RECOMMENDED_MOVIES_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}
