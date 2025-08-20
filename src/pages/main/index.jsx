import { useState, useEffect } from "react";
import { getPopularMovies } from '../../services/apiService';
import { Container } from "./style"

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function loadPupularMovies() {
            const response = await getPopularMovies(500);
            setMovies(response.results);
            console.log(response);
        }
        loadPupularMovies();
    }, []);

    return (
        <Container>
            {movies.map((movie) => (
                <div key={movie.id}>
                    {movie.poster_path ? <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} title={movie.title} alt={movie.title} /> : <p>Imagem Indisponível</p>}
                    <h2>{movie.title}</h2>
                    <h3>{movie.release_date ? new Date(movie.release_date).getFullYear() : 'Ano desconhecido'}</h3>
                    <p>{movie.overview}</p>
                </div>
            ))}
        </Container>
    )
}
export default Home;