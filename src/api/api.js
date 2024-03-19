// const listen_api = process.env.LISTEN_API_KEY;

export const searchMovies = async (searchTerm, page) => {
    const baseUrl = new URL("http://localhost:4000/api/movies/search");
    baseUrl.searchParams.append("searchTerm", searchTerm);
    baseUrl.searchParams.append("page", page.toString());

    const response = await fetch(baseUrl);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);

    }
    return response.json();
}

export const searchPodcast = async (searchTerm) => {
    const baseUrl = new URL("http://localhost:4000/api/movies/podcasts/search");
    baseUrl.searchParams.append("searchTerm", searchTerm);

    const response = await fetch(baseUrl);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);

    }
    return response.json();

}

export const getMovieSummary = async (movieId) => {
    const url = new URL(`http://localhost:4000/api/movies/${movieId}/summary`);
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);

    }
    return response.json();
}

export const getFavoriteMovies = async () => {
    const url = new URL("http://localhost:4000/api/movies/favorite");
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);

    }
    return response.json();
}

export const addFavoriteMovie = async (movie) => {
    const url = new URL("http://localhost:4000/api/movies/favorite");
    const body = {
        movieId: movie.id
    }
    const response = await fetch(url, { 
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    });
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
}

export const removeFavoriteMovie = async (movie) => {
    const url = new URL("http://localhost:4000/api/movies/favorite");
    const body = {
        movieId: movie.id
    }
    const response = await fetch(url, { 
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    });
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
}