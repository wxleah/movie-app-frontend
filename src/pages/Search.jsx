import { useCallback, useEffect, useRef, useState } from "react";
import * as api from '../api/api'
import MovieList from "../components/MovieList";
import MovieListHeading from "../components/MovieListHeading";
import SearchBox from "../components/SearchBox";
import ViewMore from "../components/ViewMore";
import SearchNote from "../components/SearchNote";
import useFavorites from "../hooks/useFavorites";

function Search() {
    const [movies, setMovies] = useState([]);
    const [searchValue, SetSearchValue] = useState("");
    const pageNumber = useRef(1); //doesn't cause a re-render
    
    
    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        try {
            const searchMovies = await api.searchMovies(searchValue, 1);
            if (searchMovies.results) {
                setMovies(searchMovies.results);
                pageNumber.current = 1;
            }
        } catch (e) {
            console.log(e);
        }
    };
    
    const handleSearchChange = (evt) => {
        SetSearchValue(evt.target.value)
    }
    
    const handleViewMoreClick = async () => {
        const nextPage = pageNumber.current + 1;
        try {
            const nextMovies = await api.searchMovies(searchValue, nextPage);
            setMovies([...movies, ...nextMovies.results]);
            pageNumber.current = nextPage;
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="row d-flex align-items-center mt-4 mb-4">
                <MovieListHeading heading="Movies" />
                <SearchBox
                    value={searchValue}
                    handleSubmit={handleSearchSubmit}
                    handleChange={handleSearchChange} />
            </div><div className='row'>
                <MovieList movies={movies} favorite={null}/>
                {movies.length !== 0 ?
                    <ViewMore onClick={handleViewMoreClick} /> : <SearchNote />}
            </div>
        </>
    )
}

export default Search;