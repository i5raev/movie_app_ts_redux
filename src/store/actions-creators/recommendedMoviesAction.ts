import {Dispatch} from "redux";
import {movies} from "../../services/axios";
import {RecommendedMoviesAction, RecommendedMoviesActionTypes} from "../../types/recommended_movies";


export const fetchRecommendedMovies = (page= 1,movie_id:number, language:string = 'en_EN') => {
    return async (dispatch: Dispatch<RecommendedMoviesAction>) => {
        try {
            dispatch({type: RecommendedMoviesActionTypes.FETCH_RECOMMENDED_MOVIES})
            const response = await movies.get(`/movie/${movie_id}/recommendations`,{
                params: {
                    page: page,
                    api_key: process.env.REACT_APP_API_KEY,
                    language: language,
                }
            });
            dispatch({type: RecommendedMoviesActionTypes.FETCH_RECOMMENDED_MOVIES_SUCCESS, payload: response.data})
        }catch (e){
            dispatch({
                type: RecommendedMoviesActionTypes.FETCH_RECOMMENDED_MOVIES_ERROR,
                payload: 'Произошла ошибка при загрузке списка рекомендованных фильмов'
            })
        }
    }
}

