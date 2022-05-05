import {IMovieDetail} from "../models/IMovieDetail";

export interface MovieDetailState {
    movieDetail: IMovieDetail,
    loading: boolean;
    error: null | string;
}

export enum MovieDetailActionTypes {
    FETCH_MOVIE_DETAIL = 'FETCH_MOVIE_DETAIL',
    FETCH_MOVIE_DETAIL_SUCCESS = 'FETCH_MOVIE_DETAIL_SUCCESS',
    FETCH_MOVIE_DETAIL_ERROR = 'FETCH_MOVIE_DETAIL_ERROR',
}

interface FetchMovieDetailAction {
    type: MovieDetailActionTypes.FETCH_MOVIE_DETAIL;
}

interface FetchMovieDetailSuccessAction {
    type: MovieDetailActionTypes.FETCH_MOVIE_DETAIL_SUCCESS;
    payload: object;
}

interface FetchMovieDetailErrorAction {
    type: MovieDetailActionTypes.FETCH_MOVIE_DETAIL_ERROR;
    payload: string;
}

export type MovieDetailAction =
    FetchMovieDetailAction |
    FetchMovieDetailSuccessAction |
    FetchMovieDetailErrorAction
