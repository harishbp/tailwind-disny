import axios from 'axios';

const movieApiUrl = "https://api.themoviedb.org/3"
const api_key = "faddf97c587f48f7176f5521e2e7cb24"
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"

const getTrending = async () => {
    const response = await axios.get(`${movieApiUrl}/trending/all/day?api_key=${api_key}&language=en-US`)
    return response.data.results
}

const getMovieByGenerId = async (id) => {
    const response = await axios.get(`${movieApiUrl}/discover/movie?api_key=${api_key}&with_genres=${id}`)
    return response.data.results
}

export { getTrending, getMovieByGenerId, movieApiUrl, api_key, IMAGE_BASE_URL}