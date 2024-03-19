import useFavorites from "../hooks/useFavorites";
import AddFavorites from "./AddFavorites";
import RemoveFavorites from "./RemoveFavorites";


function MovieCard({ movie, handleSelected, FavoriteComponent, handleFavoritesClick }) {
    const imgUrl = (movie) => {
        if (!movie.poster_path) {
            return "/black-bg-poster.png";
        } else {
            return `https://image.tmdb.org/t/p/w342${movie.poster_path}`;
        }
    }

    return (
        <div className='image-container d-flex justify-content-start m-3'
            onClick={() => handleSelected(movie)}
        >
            <img style={{ width: "15em" }}
                src={imgUrl(movie)} alt={`poster of ${movie.title}`} /><img />
            <div
                onClick={(event) => {
                    event.stopPropagation();
                    handleFavoritesClick(movie);
                }}
                className="favorite-component d-flex 
                   justify-content-center align-items-center">
                <FavoriteComponent />
            </div>
        </div>
    )
}

export default MovieCard;