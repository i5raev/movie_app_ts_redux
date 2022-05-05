import {IMovie} from "../models/IMovie";


export interface PopularMoviesState {
    movies: {
        page: number,
        results: IMovie[],
        total_pages: number,
        total_results: number,
    },
    loading: boolean;
    error: null | string;
    page: number;
}

export enum PopularMoviesActionTypes {
    FETCH_POPULAR_MOVIES = 'FETCH_POPULAR_MOVIES',
    FETCH_POPULAR_MOVIES_SUCCESS = 'FETCH_POPULAR_MOVIES_SUCCESS',
    FETCH_POPULAR_MOVIES_ERROR = 'FETCH_POPULAR_MOVIES_ERROR',
    SET_POPULAR_MOVIES_PAGE = 'SET_POPULAR_MOVIES_PAGE',
}

interface FetchPopularMoviesAction {
    type: PopularMoviesActionTypes.FETCH_POPULAR_MOVIES;
}

interface FetchPopularMoviesSuccessAction {
    type: PopularMoviesActionTypes.FETCH_POPULAR_MOVIES_SUCCESS;
    payload: {
        page: number,
        results: IMovie[],
        total_pages: number,
        total_results: number,
    };
}

interface FetchPopularMoviesErrorAction {
    type: PopularMoviesActionTypes.FETCH_POPULAR_MOVIES_ERROR;
    payload: string;
}

interface SetPopularMoviesPage {
    type: PopularMoviesActionTypes.SET_POPULAR_MOVIES_PAGE;
    payload: number;
}

export type PopularMoviesAction =
    FetchPopularMoviesAction |
    FetchPopularMoviesSuccessAction |
    FetchPopularMoviesErrorAction |
    SetPopularMoviesPage;
