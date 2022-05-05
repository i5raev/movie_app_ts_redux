import React, {useEffect} from 'react';
import styles from './style.module.scss';
import {useActions} from "../../hooks/useActions";
import {UseTypedSelector} from "../../hooks/useTypedSelector";
import {UseParamsId} from "../../hooks/useParamsId";
import {LoadingSpinner, MoviesItem} from "../index";

const RecommendedMovies = () => {
    const {recommended_movies, error, loading} = UseTypedSelector(state => state.recommended_movies);
    const {fetchRecommendedMovies} = useActions()
    const {id} = UseParamsId()

    useEffect(() => {
        fetchRecommendedMovies(1,id)
    },[id])

    if(loading){
        return <LoadingSpinner/>
    }
    if(error){
        return <h1>{error}</h1>
    }

    return (
        <div className='container'>
            <div className={styles.recommended_movies_inner}>
                <h2>Recommended movies:</h2>
                <div className={styles.recommended_movies_list}>
                    {recommended_movies.results.map(movie => (
                        <MoviesItem movie={movie}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecommendedMovies;
