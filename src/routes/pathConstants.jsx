const PathConstants = {
    SEARCH: import.meta.env.DEV ? "/" : "/movie-app-frontend/",
    FAVORITE: import.meta.env.DEV ? "/favorite" : "/movie-app-frontend/favorite",
    REVIEW: import.meta.env.DEV ? "/favorite/:id/review" : "/movie-app-frontend/favorite/:id/review" 
}

export default PathConstants;