import React, {useEffect} from 'react';
import styles from './style.module.scss';
import {UseTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {UseParamsId} from "../../hooks/useParamsId";
import {Favourite, LoadingSpinner} from "../index";
import {imageURL} from "../../services/axios";

const DetailMovie: React.FC = () => {
    const {movieDetail,error,loading} = UseTypedSelector(state => state.movieDetail);
    const {id} = UseParamsId()
    const {fetchMovieDetail} = useActions()

    const {
        backdrop_path,
        status,
        vote_count,
        vote_average,
        poster_path,
        original_language,
        title,
        overview,
        release_date,
        genres
    } = movieDetail

    useEffect(() => {
        fetchMovieDetail(id)
    },[id])

    if(loading){
        return <LoadingSpinner/>
    }
    if(error){
        return <h1>{error}</h1>
    }

    return (
        <div className={styles.detail_movie} style={backdrop_path ? {
            backgroundImage: `url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}')`,
        } : {}}>
            <div className={styles.detail_movie_inner}>
                <div className="container">
                    <div className={styles.detail_movie_columns}>
                        <div className={styles.detail_movie_columns_left}>
                            <div className={styles.detail_movie_image_wrapper}>
                                {poster_path &&  <img src={`${imageURL}${poster_path}`} alt="poster_path"/>}
                            </div>
                        </div>
                        <div className={styles.detail_movie_columns_right}>
                            <div className={styles.title_wrapper}>
                                <div className={styles.title}>
                                    <p>{title}</p>
                                    <div className={styles.fav_wrapper}>
                                        <Favourite id={Number(id)}/>
                                    </div>
                                </div>
                                <div className={styles.genres}>
                                    <p>Genres:</p>
                                    {genres.map(genre => (
                                        <p>{genre.name}</p>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.another_wrapper}>
                                <p>Status: <span>{status}</span></p>
                                <p>Vote Average: <span>{vote_average}</span></p>
                                <p>Vote Count: <span>{vote_count}</span></p>
                                <p>Release Date: <span>{release_date}</span></p>
                                <p>Original Language: <span>{original_language}</span></p>
                                <p>Review: <span>{overview}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailMovie;
