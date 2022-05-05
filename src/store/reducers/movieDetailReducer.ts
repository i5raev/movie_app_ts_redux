import {MovieDetailAction, MovieDetailActionTypes, MovieDetailState} from "../../types/movieDetail";

const initialState : MovieDetailState = {
    movieDetail: {
        backdrop_path: null,
        genres: [],
        id: 0,
        original_language: '',
        original_title: '',
        overview: '',
        popularity: 0,
        poster_path: null,
        release_date: '',
        status: '',
        title: '',
        vote_average: 0,
        vote_count: 0,
    },
    loading: false,
    error: '',
}

export const movieDetailReducer = (state = initialState, action: MovieDetailAction): MovieDetailState => {
    switch (action.type) {
        case MovieDetailActionTypes.FETCH_MOVIE_DETAIL:
            return {...state, loading: true}
        case MovieDetailActionTypes.FETCH_MOVIE_DETAIL_SUCCESS:
            return <MovieDetailState>{...state, loading: false, movieDetail: action.payload}
        case MovieDetailActionTypes.FETCH_MOVIE_DETAIL_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}
