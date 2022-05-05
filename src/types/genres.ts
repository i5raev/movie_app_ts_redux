import {IGenre} from "../models/IGenre";

export interface GenresState {
    genres: {
        genres: IGenre[];
    },
    loading: boolean;
    error: null | string;
}

export enum GenresActionTypes {
    FETCH_GENRES = 'FETCH_GENRES',
    FETCH_GENRES_SUCCESS = 'FETCH_GENRES_SUCCESS',
    FETCH_GENRES_ERROR = 'FETCH_GENRES_ERROR',
}

interface FetchGenresAction {
    type: GenresActionTypes.FETCH_GENRES;
}

interface FetchGenresSuccessAction {
    type: GenresActionTypes.FETCH_GENRES_SUCCESS;
    payload: {
        genres: IGenre[],
    };
}

interface FetchGenresErrorAction {
    type: GenresActionTypes.FETCH_GENRES_ERROR;
    payload: string;
}


export type GenresAction =
    FetchGenresAction |
    FetchGenresSuccessAction |
    FetchGenresErrorAction
