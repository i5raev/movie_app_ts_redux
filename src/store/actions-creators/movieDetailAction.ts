import {Dispatch} from "redux";
import {movies} from "../../services/axios";
import {MovieDetailAction, MovieDetailActionTypes} from "../../types/movieDetail";

export const fetchMovieDetail = (movie_id:string, language:string = 'en_EN',) => {
    return async (dispatch: Dispatch<MovieDetailAction>) => {
        try {
            dispatch({type: MovieDetailActionTypes.FETCH_MOVIE_DETAIL})
            const response = await movies.get(`/movie/${movie_id}`,{
                params: {
                    api_key: process.env.REACT_APP_API_KEY,
                    language: language,
                }
            });
            dispatch({type: MovieDetailActionTypes.FETCH_MOVIE_DETAIL_SUCCESS, payload: response.data})
        }catch (e){
            dispatch({
                type: MovieDetailActionTypes.FETCH_MOVIE_DETAIL_ERROR,
                payload: 'Произошла ошибка при загрузке фильма'
            })
        }
    }
}
