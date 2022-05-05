import {IMovie} from "../models/IMovie";


export interface RecommendedMoviesState {
    recommended_movies: {
        page: number,
        results: IMovie[],
    },
    loading: boolean;
    error: null | string;
    page: number;
}

export enum RecommendedMoviesActionTypes {
    FETCH_RECOMMENDED_MOVIES = 'FETCH_RECOMMENDED_MOVIES',
    FETCH_RECOMMENDED_MOVIES_SUCCESS = 'FETCH_RECOMMENDED_MOVIES_SUCCESS',
    FETCH_RECOMMENDED_MOVIES_ERROR = 'FETCH_RECOMMENDED_MOVIES_ERROR',
}

interface FetchRecommendedMoviesAction {
    type: RecommendedMoviesActionTypes.FETCH_RECOMMENDED_MOVIES;
}

interface FetchRecommendedMoviesSuccessAction {
    type: RecommendedMoviesActionTypes.FETCH_RECOMMENDED_MOVIES_SUCCESS;
    payload: {
        page: number,
        results: IMovie[],
    };
}

interface FetchRecommendedMoviesErrorAction {
    type: RecommendedMoviesActionTypes.FETCH_RECOMMENDED_MOVIES_ERROR;
    payload: string;
}

export type RecommendedMoviesAction =
    FetchRecommendedMoviesAction |
    FetchRecommendedMoviesSuccessAction |
    FetchRecommendedMoviesErrorAction
    ;
