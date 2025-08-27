import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from '../../services/apiService';
import { HeaderContainer, Container, ImageMovie, Title, Info, ContainerDetails, TagLine, HeaderInfo, ButtonBack, FavoriteIcon, HeaderTitle, SinopseTitle, SinopseText } from './style';
import GenresCard from '../../components/genres/GenresCard';
import Credits from '../../components/credits/Credts';
import Load from '../../components/load/Load';
import Favorite from '../../assets/icons/favorite.svg';
import NotFavorite from '../../assets/icons/notfavorite.svg';

const Details = () => {

    const [loading, setLoading] = useState(false);
    const [favorite, setFavorite] = useState(false);
    const [movie, setMovie] = useState([]);
    const [genres, setGenres] = useState([]);
    const [creditsCast, setCreditsCast] = useState([]);
    const [creditsCrew, setCreditsCrew] = useState([]);
    const { id } = useParams();

    const loadMoviesDetails = async () => {
        try {
            setLoading(true);
            const response = await getMovieDetails(id);
            setMovie(response);
            setGenres(response.genres);
            setCreditsCast(response.credits.cast);
            setCreditsCrew(response.credits.crew);
            setLoading(false);
            console.log(response);
        } catch (erro) {
            console.log("erro erro erro");
        }
    };

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

    function handleFavorite() {
        if (favorite) {
            setFavorite(false);
        } else {
            setFavorite(true);
        }
    }



    return (
        loading ? <Load></Load> : <>
            <HeaderContainer $url={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}>
                <ImageMovie src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} title={movie.title} alt={movie.title} loading="lazy" />
                <HeaderInfo>
                    <div>
                        <HeaderTitle>
                            <Title>{movie.title}</Title>
                            {favorite ? <FavoriteIcon src={Favorite} onClick={handleFavorite} /> : <FavoriteIcon src={NotFavorite} onClick={handleFavorite} />}
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
                    <SinopseText>{movie.overview ? movie.overview : "N/A"}</SinopseText>
                    <Credits credits={creditsCast} title={"Elenco"}></Credits>
                    <Credits credits={creditsCrew} title={"Equipe"}></Credits>
                </ContainerDetails>
            </Container>
        </>
    )
}
export default Details;