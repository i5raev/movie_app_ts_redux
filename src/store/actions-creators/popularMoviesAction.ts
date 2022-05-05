import {Dispatch} from "redux";
import {PopularMoviesAction, PopularMoviesActionTypes} from "../../types/movies";
import {movies} from "../../services/axios";

export const fetchPopularMovies = (page= 1, language:string = 'en_EN') => {
    return async (dispatch: Dispatch<PopularMoviesAction>) => {
        try {
            dispatch({type: PopularMoviesActionTypes.FETCH_POPULAR_MOVIES})
            const response = await movies.get('/movie/popular',{
                params: {
                    page: page,
                    api_key: process.env.REACT_APP_API_KEY,
                    language: language,
                }
            });
            dispatch({type: PopularMoviesActionTypes.FETCH_POPULAR_MOVIES_SUCCESS, payload: response.data})
        }catch (e){
            dispatch({
                type: PopularMoviesActionTypes.FETCH_POPULAR_MOVIES_ERROR,
                payload: 'Произошла ошибка при загрузке списка фильмов'
            })
        }
    }
}

export const setPopularMoviesPage = (page: number): PopularMoviesAction => {
    return {type: PopularMoviesActionTypes.SET_POPULAR_MOVIES_PAGE, payload: page}
}
