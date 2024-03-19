import { useState, useEffect, useRef } from 'react';
import MovieModal from "./MovieModal";
import MovieCard from './MovieCard';
import RemoveFavorites from './RemoveFavorites';
import AddFavorites from './AddFavorites';
import useFavorites from '../hooks/useFavorites';

function MovieList({ movies, favorite }) {

    const [selectedMovie, setSelectedMovie] = useState(undefined);
    const handleSelected = (movie) => {
        setSelectedMovie(movie);
    };
    const { favoriteStatus, addFavoriteMovie, removeFavoriteMovie  } = useFavorites();

    return (
        <>
            {movies.map((movie, index) => {
                const isFavorite = !favorite ? favoriteStatus(movie) : true;
                return <MovieCard movie={movie} FavoriteComponent={isFavorite ? RemoveFavorites : AddFavorites}
                handleFavoritesClick={isFavorite ? removeFavoriteMovie : addFavoriteMovie}
                favoriteStatus={favoriteStatus}
                handleSelected={handleSelected}
                key={index}
                />

            })}
            {selectedMovie ? <MovieModal movieId={selectedMovie.id.toString()} onClose={() => setSelectedMovie(undefined)} /> : null}
        </>
    );
}

export default MovieList;

