import {Dispatch} from "redux";
import {movies} from "../../services/axios";
import {GenresAction, GenresActionTypes} from "../../types/genres";


export const fetchAllGenres = (language:string = 'en_EN') => {
    return async (dispatch: Dispatch<GenresAction>) => {
        try {
            dispatch({type: GenresActionTypes.FETCH_GENRES})
            const response = await movies.get('/genre/movie/list',{
                params: {
                    api_key: process.env.REACT_APP_API_KEY,
                    language: language,
                }
            });
            dispatch({type: GenresActionTypes.FETCH_GENRES_SUCCESS, payload: response.data})
        }catch (e){
            dispatch({
                type: GenresActionTypes.FETCH_GENRES_ERROR,
                payload: 'Произошла ошибка при загрузке списка дел'
            })
        }
    }
}

