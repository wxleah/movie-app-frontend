import { useCallback, useEffect, useState } from "react";
import * as api from '../api/api'

const useFavorites = () => {
    const [favorites, setFavorites] = useState([]);
    const fetchFavoriteMovies = async () => {
        try {
            const favoriteMovies = await api.getFavoriteMovies();
            setFavorites(favoriteMovies.results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchFavoriteMovies();
    }, [favorites])

    const favoriteStatus = (movie) => {
        return favorites.some((favMovie) => movie.id === favMovie.id);
    }

    const addFavoriteMovie = async (movie) => {
        try {
            await api.addFavoriteMovie(movie);
            const newFavoriteList = [...favorites, movie];
            setFavorites(newFavoriteList);
            // saveToLocalStorage(newFavoriteList);
        } catch (error) {
            console.log(error);
        }
    }

    const removeFavoriteMovie = async (movie) => {
        try {
            await api.removeFavoriteMovie(movie);
            const newFavoriteList = favorites.filter(
                (favorite) => favorite.id !== movie.id
            );
            setFavorites(newFavoriteList);
            // saveToLocalStorage(newFavoriteList);
        } catch (error) {
            console.log(error)
        }

    }


    return { favorites, setFavorites, fetchFavoriteMovies, favoriteStatus, addFavoriteMovie, removeFavoriteMovie };

};

export default useFavorites;