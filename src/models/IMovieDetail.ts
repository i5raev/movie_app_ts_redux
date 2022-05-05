import {IGenre} from "./IGenre";

export interface IMovieDetail {
    backdrop_path: string | null,
    genres: IGenre[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string | null,
    popularity: number,
    poster_path: string | null,
    release_date: string,
    status: string,
    title: string,
    vote_average: number,
    vote_count: number,
}

