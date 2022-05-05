import React, {FC} from 'react';
import styles from './style.module.scss';
import {IMovie} from "../../models/IMovie";
import {Link} from 'react-router-dom';
import {Favourite} from "../index";
import {imageURL} from "../../services/axios";

interface MoviesItemProps{
    movie: IMovie;
}

const MoviesItem:FC<MoviesItemProps> = ({movie}) => {
    return (
            <div className={styles.movies_item} key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                <div className={styles.image_wrapper}>
                    {movie.poster_path &&
                    <img src={`${imageURL}${movie.poster_path}`} alt="image"/>
                    }
                </div>
                <div className={styles.movies_title}>
                    <p>{movie.title} </p>
                    <span>{movie.overview.slice(0,150)} ... </span>
                    <small>{movie.release_date}</small>
                </div>
                </Link>
                <div className={styles.favourite_wrapper}>
                    <Favourite id={movie.id}/>
                </div>
            </div>
    );
};

export default MoviesItem;
