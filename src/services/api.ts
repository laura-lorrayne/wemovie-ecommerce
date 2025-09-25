import axios from "axios";
import { Movie } from "../types/movie";

const api = axios.create({
  baseURL: "https://wemovies-seven.vercel.app/api",
});

interface ApiResponse {
  products: Movie[];
}

export const fetchMovies = async (): Promise<Movie[]> => {
  try {
    const response = await api.get<ApiResponse>("/movies");

    return response.data.products;
  } catch (error) {
    throw error;
  }
};

export default api;
