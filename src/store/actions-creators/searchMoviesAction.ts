import {Dispatch} from "redux";
import {movies} from "../../services/axios";
import {SearchMoviesAction, SearchMoviesActionTypes} from "../../types/searchMovies";

export const fetchSearchMovies = (page= 1, text:string, language:string = 'en_EN') => {
    return async (dispatch: Dispatch<SearchMoviesAction>) => {
        try {
            dispatch({type: SearchMoviesActionTypes.FETCH_SEARCH_MOVIES})
            const response = await movies.get('/search/movie',{
                params: {
                    page: page,
                    language: language,
                    api_key: process.env.REACT_APP_API_KEY,
                    query: text,
                }
            });
            dispatch({type: SearchMoviesActionTypes.FETCH_SEARCH_MOVIES_SUCCESS, payload: response.data})
        }catch (e){
            dispatch({
                type: SearchMoviesActionTypes.FETCH_SEARCH_MOVIES_ERROR,
                payload: 'Произошла ошибка при поиска фильмов'
            })
        }
    }
}
