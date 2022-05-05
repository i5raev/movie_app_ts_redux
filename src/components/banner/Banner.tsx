import React from 'react';
import styles from './banner.module.scss';
import {SearchMovies} from "../index";


const Banner = () => {
    return (
        <div className={styles.banner_wrapper}>
            <div className={styles.image_wrapper}>
                <img src="https://cinematica.kg/uploads/movies/fc5dbbe3-4000-4c6c-8f5b-74efaa63857f.jpg/1024/800" alt="banner"/>
            </div>
            <SearchMovies/>
        </div>
    );
};

export default Banner;
