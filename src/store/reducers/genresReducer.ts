import {GenresAction, GenresActionTypes, GenresState} from "../../types/genres";

const initialState : GenresState = {
    genres: {
        genres: [],
    },
    error: null,
    loading: false,
}

export const genresReducer = (state = initialState, action: GenresAction): GenresState => {
    switch (action.type) {
        case GenresActionTypes.FETCH_GENRES:
            return {...state, loading: true}
        case GenresActionTypes.FETCH_GENRES_SUCCESS:
            return {...state, loading: false, genres: action.payload}
        case GenresActionTypes.FETCH_GENRES_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}
