import React, {useEffect, useState} from 'react';
import styles from './style.module.scss';
import {useActions} from "../../hooks/useActions";
import {UseTypedSelector} from "../../hooks/useTypedSelector";
import {Link} from 'react-router-dom';
import {IGenre} from "../../models/IGenre";
import {imageURL} from "../../services/axios";

const SearchMovies = () => {
    const [text, setText] = useState<string>('')
    const {fetchSearchMovies} = useActions()
    const {movies} = UseTypedSelector(state => state.searchMovies)
    const {genres} = UseTypedSelector(state => state.genres)

    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setText(newValue)
    }

    useEffect(() => {
        setTimeout(() => {
            fetchSearchMovies(1,text)
        },500)
    },[text])

    return (
        <div className={styles.search_movies}>
            <div className={styles.input_wrapper}>
                <input
                    type="text"
                    placeholder='Search...'
                    onChange={e => handleChangeText(e)}
                />
            </div>
            {
                text
                &&
                <div className={styles.search_results_wrapper}>
                        {movies.results.map(movie => (
                            <Link to={`movies/${movie.id}`} key={movie.id}>
                                <div className={styles.search_results_item} key={movie.id}>
                                        <div className={styles.search_results_item_left}>
                                            <div className={styles.image_wrapper}>
                                                {
                                                    movie.poster_path
                                                    &&
                                                    <img src={`${imageURL}${movie.poster_path}`} alt="image"/>
                                                }
                                            </div>
                                            <p>{movie.original_title}</p>
                                        </div>
                                        <div className={styles.search_results_item_right}>
                                            {
                                                    movie.genre_ids.map((gen_id: number):any  => {
                                                        const genresTitles = [{id: 0, name: ''}];
                                                        genres.genres.map((genre: IGenre): any  => {
                                                            if(gen_id === genre.id){
                                                                genresTitles.push(genre)
                                                            }
                                                        })
                                                        return(
                                                            genresTitles.map((item) => (
                                                                <p>{item.name}</p>
                                                            ))
                                                        )
                                                    })
                                            }
                                        </div>
                                </div>
                            </Link>
                            ))}
                </div>
            }
        </div>
    );
};

export default SearchMovies;
