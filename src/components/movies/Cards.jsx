import { Container, Card, Title, ImageMovie, Info, Link, ReleaseDate, VoteMovie, StarIcon, ScoreMovie } from "./style";
import ImageNotFound from '../../assets/images/ImageNotFound.svg';
import Star from '../../assets/icons/star.svg';

const Cards = ({movies}) => {
    return (
        <Container>
            {movies.map((movie, index) => (
                <Card key={index}>
                    <ScoreMovie>
                        <StarIcon src={Star} />
                        <VoteMovie>{movie && movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}</VoteMovie>
                    </ScoreMovie>
                    {movie.poster_path ? <ImageMovie src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} title={movie.title} alt={movie.title} loading="lazy" /> : <ImageMovie src={ImageNotFound} />}
                    <Info>
                        <Title title={movie.title}>{movie.title}</Title>
                        <ReleaseDate>{movie.release_date ? new Date(movie.release_date).getFullYear() : 'Ano desconhecido'}</ReleaseDate>
                        <Link to={`/details/${movie.id}`}>Detalhes</Link>
                    </Info>
                </Card>
            ))}
        </Container>
    );
}

export default Cards;