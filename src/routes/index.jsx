import React from "react"
import PathConstants from "./pathConstants"

const Search = React.lazy(() => import("../pages/Search"));
const Favorite = React.lazy(() => import("../pages/Favorite"));

const routes = [
    { path: PathConstants.SEARCH, element: <Search /> },
    { path: PathConstants.FAVORITE, element: <Favorite /> },
    // other mappings ...
]

export default routes;