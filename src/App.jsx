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
  ], { basename: import.meta.env.DEV ? '/' : '/react-vite-gh-pages/' })


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
