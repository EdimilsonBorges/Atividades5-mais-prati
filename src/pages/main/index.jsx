import { useState, useEffect, useRef } from "react";
import { getPopularMovies } from '../../services/apiService';
import Cards from '../../components/movies/Cards';
import { Container } from "./style";
import Load from '../../components/load/Load';

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const loaderRef = useRef(null);


    const loadMovies = async (pageNumber) => {
        try {
            setLoading(true);
            const response = await getPopularMovies(pageNumber);
            setMovies((prev) => [...prev, ...response.results]);
            setLoading(false);
            setError(false);
        } catch (erro) {
            setError(true);
        }

    };

    useEffect(() => {
        loadMovies(page);
    }, [page]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const first = entries[0];
                if (first.isIntersecting && !loading) {
                    setPage((prev) => prev + 1);
                }
            },
            {
                threshold: 0,
                rootMargin: "20px",
            }
        );

        const currentLoader = loaderRef.current;
        if (currentLoader) observer.observe(currentLoader);

        return () => {
            if (currentLoader) observer.unobserve(currentLoader);
        };
    }, [loading]);

    return (
        <Container>
            <Cards movies={movies}>
            </Cards>
            {!error ? loading && <Load></Load>: <div></div>}
            <div ref={loaderRef} style={{ height: "50px", marginTop: "10rem" }} />
        </Container>
    )
}
export default Home;