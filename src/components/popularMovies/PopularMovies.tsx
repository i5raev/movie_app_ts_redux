import React, {useEffect} from 'react';
import {UseTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {LoadingSpinner, MoviesItem, Paginator} from "../index";
import styles from './style.module.scss';

const PopularMovies:React.FC = () => {
    const {page,error,loading,movies} = UseTypedSelector(state => state.movies);
    const {fetchPopularMovies, setPopularMoviesPage} = useActions();

    useEffect(() => {
        fetchPopularMovies(page)
    },[page])


    if(loading){
        return <LoadingSpinner/>
    }
    if(error){
        return <h1>{error}</h1>
    }

    return (
        <div className={styles.popular_movies}>
            <h2>Popular Movies: </h2>
            <div className={styles.popular_movies_list}>
                {movies.results.map(movie => (
                    <MoviesItem movie={movie} key={movie.id}/>
                ))}
            </div>
            <Paginator
                totalPages={movies.total_pages}
                currentPage={movies.page}
                changePageHandler={setPopularMoviesPage}
            />
        </div>
    );
};

export default PopularMovies;
