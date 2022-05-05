import React from 'react';
import {Banner, PopularMovies} from "../../components";
import {useActions} from "../../hooks/useActions";

const HomePage = () => {
    const {fetchAllGenres} = useActions()

    React.useEffect(() => {
        fetchAllGenres()
    },[])

    return (
        <div className='container'>
            <Banner/>
            <PopularMovies/>
        </div>
    );
};

export default HomePage;
