import * as PopularMoviesActionCreators from './popularMoviesAction';
import * as MovieDetailActionCreators from './movieDetailAction';
import * as SearchMoviesActionCreators from './searchMoviesAction';
import * as GenresActionCreators from './genresAction';
import * as RecommendedActionCreators from './recommendedMoviesAction';

export default {
    ...PopularMoviesActionCreators,
    ...MovieDetailActionCreators,
    ...SearchMoviesActionCreators,
    ...GenresActionCreators,
    ...RecommendedActionCreators,
}
