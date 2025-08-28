import { useState, useEffect, useRef } from "react";
import { getPopularMovies, searchMovies } from '../../services/apiService';
import Cards from '../../components/movies/Cards';
import { Container, TitleCards, EndPage, ResultsText, SectionSearch, ButtonSearch, FormSearch, Search } from "./style";
import Load from '../../components/load/Load';

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [totalPages, setTotalPages] = useState(1);
    const [totalResults, setTotalResults] = useState(1);
    const loaderRef = useRef(null);


    const loadMovies = async (pageNumber) => {
        try {
            setLoading(true);
            const response = await getPopularMovies(pageNumber);
            setMovies((prev) => [...prev, ...response.results]);
            setTotalPages(response.total_pages);
            setTotalResults(response.totalResults);
            setLoading(false);
            setError(false);
        } catch (erro) {
            setError(true);
        }

    };

    const handleSearch = async (pageNumber = 1, event) => {
        event ? event.preventDefault(): null;
        if (!query.trim()) return;
        setLoading(true);

        try {
            const data = await searchMovies(query, pageNumber);

            if (pageNumber === 1) {
                setMovies(data.results);
                console.log(data);
                setIsSearching(true);
                setPage(1);
            } else {
                setMovies((prev) => [...prev, ...data.results]);
            }
            setTotalPages(data.total_pages);
            setTotalResults(data.total_results)
            setError(false);
        } catch (err) {
            setError("Erro ao buscar filmes.");
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        if (isSearching) {
            handleSearch(page);
        }else{
            loadMovies(page);
        }
    }, [page]);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const first = entries[0];
                if (first.isIntersecting && !loading && page < totalPages) {
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
            <SectionSearch>
                <FormSearch>
                    <Search type="search"
                        placeholder="Digite o nome do filme..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)} />
                    <ButtonSearch type="submit" onClick={(e) => handleSearch(1, e)}>Pesquisar</ButtonSearch>
                </FormSearch>
            </SectionSearch>
            {!isSearching ? <TitleCards>Filmes Populares</TitleCards> : <ResultsText>Foram encontrado {totalResults} filmes nesta busca.</ResultsText>}
            <Cards movies={movies}>
            </Cards>
            {!error && loading && <Load></Load>}
            {/* {page === totalPages && !loading && <EndPage>Fim</EndPage>} */}
            <div ref={loaderRef} style={{ height: "50px", marginTop: "10rem" }} />
        </Container>
    )
}
export default Home;