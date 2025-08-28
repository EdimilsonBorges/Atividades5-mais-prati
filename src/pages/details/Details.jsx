import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from '../../services/apiService';
import { HeaderContainer, Container, ImageMovie, Title, Info, ContainerDetails, TagLine, HeaderInfo, ButtonBack, FavoriteIcon, HeaderTitle, SinopseTitle, SinopseText, ContainerError, MsgError } from './style';
import GenresCard from '../../components/genres/GenresCard';
import Credits from '../../components/credits/Credts';
import Load from '../../components/load/Load';
import Favorite from '../../assets/icons/favorite.svg';
import NotFavorite from '../../assets/icons/notfavorite.svg';
import ImageNotFound from '../../assets/images/ImageNotFound.svg';

const Details = () => {

    const [loading, setLoading] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [movie, setMovie] = useState([]);
    const [genres, setGenres] = useState([]);
    const [creditsCast, setCreditsCast] = useState([]);
    const [creditsCrew, setCreditsCrew] = useState([]);
    const { id } = useParams();
    const [error, setError] = useState(false);

    const loadMoviesDetails = async () => {
        try {
            setLoading(true);
            const response = await getMovieDetails(id);
            setMovie(response);
            setGenres(response.genres);
            setCreditsCast(response.credits.cast);
            setCreditsCrew(response.credits.crew);
            setLoading(false);
            setError(false);
        } catch (erro) {
            setError(true);
        }
    };

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const isFavorite = favorites.some((fav) => fav.id === movie.id);
        setIsFavorite(isFavorite);
  }, [movie]);

    useEffect(() => {
        loadMoviesDetails();
    }, [])


    function formatRuntime(totalMinutes) {
        if (!totalMinutes || isNaN(totalMinutes)) return 'Duração desconhecida';

        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;

        if (hours > 0 && minutes > 0) return `${hours}h ${minutes}m`;
        if (hours > 0) return `${hours}h`;
        if (minutes > 0) return `${minutes}m`;

        return '0m';
    }

    function addToFavorites(movie){
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        if (!favorites.some((fav) => fav.id === movie.id)) {
        favorites.push(movie);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        }
    }

    function removeToFavorites(movie){
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const updated = favorites.filter((fav) => fav.id !== movie.id);
        localStorage.setItem("favorites", JSON.stringify(updated));
    }

    function handleFavorite() {
        if (isFavorite) {
            setIsFavorite(false);
            removeToFavorites(movie);
        } else {
            setIsFavorite(true);
            addToFavorites(movie);
        }
    }

    return ( error ? <ContainerError> <MsgError>Ops... Ocorreu um erro ao carregar os dados.</MsgError> </ContainerError> : loading ? <Load></Load> : <>
            <HeaderContainer $url={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}>
                {movie.poster_path ? <ImageMovie src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} title={movie.title} alt={movie.title} loading="lazy" /> : <ImageMovie src={ImageNotFound} title={movie.title} alt={movie.title} loading="lazy" /> }
                <HeaderInfo>
                    <div>
                        <HeaderTitle>
                            <Title>{movie.title}</Title>
                            {isFavorite ? <FavoriteIcon src={Favorite} title="Remover dos favoritos" onClick={handleFavorite} /> : <FavoriteIcon src={NotFavorite} title="Adicionar aos favoritos" onClick={handleFavorite} />}
                        </HeaderTitle>
                        <TagLine>{movie.tagline}</TagLine>
                    </div>
                    <GenresCard genres={genres}></GenresCard>
                    <Info>
                        <span>Score: {movie && movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}</span>
                        <span>Votos: {movie.vote_count}</span>
                        <span>Ano: {movie.release_date ? new Date(movie.release_date).getFullYear() : 'Ano desconhecido'}</span>
                        <span>Duração: {formatRuntime(movie.runtime)}</span>
                    </Info>
                    <ButtonBack to='/'>Voltar</ButtonBack>
                </HeaderInfo>
            </HeaderContainer>
            <Container>
                <ContainerDetails>
                    <SinopseTitle>Sinopse</SinopseTitle>
                    <SinopseText>{movie.overview ? movie.overview : "Sinopse não disponível."}</SinopseText>
                    <Credits credits={creditsCast} title={"Elenco"}></Credits>
                    <Credits credits={creditsCrew} title={"Equipe"}></Credits>
                </ContainerDetails>
            </Container>
        </>
    )
}
export default Details;