import { useState, useEffect, useRef } from 'react';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavorites from './components/AddFavorites';
import RemoveFavorites from './components/RemoveFavorites';
import MovieModal from './components/MovieModal';
import * as api from './api/api'
import SearchNote from './components/SearchNote';
import ViewMore from './components/ViewMore';

// styling
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


// router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout';
import routes from "./routes"


function App() {
  const router = createBrowserRouter([
    {
      // parent route component
      element: <Layout />,
      // child route components
      children: routes,
    },
  ])


  return (
    <>
      <RouterProvider router={router} />

      {/* <div className='container-fluid movie-app'>

          <><div className="row d-flex align-items-center mt-4 mb-4">
            <MovieListHeading heading="Movies" />
            <SearchBox
              value={searchValue}
              handleSubmit={handleSearchSubmit}
              handleChange={handleSearchChange} />
          </div><div className='row'>
              <MovieList movies={movies}
                handleFavoritesClick={addFavoriteMovie}
                favoriteComponent={AddFavorites} />
              {movies.length !== 0 ?
                <ViewMore onClick={handleViewMoreClick} /> : <SearchNote />}
            </div></>


          <div className="row d-flex align-items-center mt-4 mb-4">
            <MovieListHeading heading="Favorites" />
            <div className='row'>

              <MovieList
                movies={favorites}
                handleFavoritesClick={RemoveFavoriteMovie}
                favoriteComponent={RemoveFavorites}
              />
            </div>
          </div>
      </div> */}
    </>
  )
}

export default App
