import axios from 'axios';

const API_KEY = '367e0df3062bd8364fe35d13d35da537';
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
    baseURL: BASE_URL,
});

export const getPopularMovies = async (page = 1) => {
    try {
        const response = await api.get('/movie/popular', {
            params: {
                api_key: API_KEY,
                page,
                language: 'pt-BR',
            },
        });
        return response.data;
    } catch (error) {
        throw new error;
    }
};

export default api;