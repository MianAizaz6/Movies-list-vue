import axios from "axios";

export const FetchTrendingMovies = (query) => axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=d8b7f37df1cb42b7e4dfca2d65c8cc30&${query || ''}`);

export const FetchTvShows = (query) => axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=d8b7f37df1cb42b7e4dfca2d65c8cc30&${query || ''}`);