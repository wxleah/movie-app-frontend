import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import MovieListHeading from "../components/MovieListHeading";
import useFavorites from "../hooks/useFavorites";
import MovieCard from "../components/MovieCard";
import RemoveFavorites from "../components/RemoveFavorites";
import MovieModal from "../components/MovieModal";

function Favorite() {
    const { favorites, removeFavoriteMovie } = useFavorites();
    const [selectedMovie, setSelectedMovie] = useState(undefined);
    const handleSelected = (movie) => {
        setSelectedMovie(movie);
    };

    return (
        <>
        <div className="row d-flex align-items-center mt-4 mb-4">
            <MovieListHeading heading="Favorite" />
        </div><div className='row'>
        
            {favorites.map((movie, index) => {
                return <MovieCard movie={movie} FavoriteComponent={RemoveFavorites}
                handleFavoritesClick={removeFavoriteMovie}
                handleSelected={handleSelected}
                key={index}
                />

            })}
            {selectedMovie ? <MovieModal movieId={selectedMovie.id.toString()} onClose={() => setSelectedMovie(undefined)} /> : null}
        </div>
    </>
    )
}

export default Favorite;