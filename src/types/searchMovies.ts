import {IMovie} from "../models/IMovie";


export interface SearchMoviesState {
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

export enum SearchMoviesActionTypes {
    FETCH_SEARCH_MOVIES = 'FETCH_SEARCH_MOVIES',
    FETCH_SEARCH_MOVIES_SUCCESS = 'FETCH_SEARCH_MOVIES_SUCCESS',
    FETCH_SEARCH_MOVIES_ERROR = 'FETCH_SEARCH_MOVIES_ERROR',
}

interface FetchSearchMoviesAction {
    type: SearchMoviesActionTypes.FETCH_SEARCH_MOVIES;
}

interface FetchSearchMoviesSuccessAction {
    type: SearchMoviesActionTypes.FETCH_SEARCH_MOVIES_SUCCESS;
    payload: {
        page: number,
        results: IMovie[],
        total_pages: number,
        total_results: number,
    };
}

interface FetchSearchMoviesErrorAction {
    type: SearchMoviesActionTypes.FETCH_SEARCH_MOVIES_ERROR;
    payload: string;
}


export type SearchMoviesAction =
    FetchSearchMoviesAction |
    FetchSearchMoviesSuccessAction |
    FetchSearchMoviesErrorAction
