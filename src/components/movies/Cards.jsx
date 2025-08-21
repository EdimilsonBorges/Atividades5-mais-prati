import { Container, Card, Title, ImageMovie, Info, Button, ReleaseDate, VoteMovie, StarIcon, ScoreMovie } from "./style";
import ImageNotFound from '../../assets/images/ImageNotFound.svg';
import Star from '../../assets/icons/star.svg';

const Cards = (props) => {
    const movies = props.movies;
    return (
        <Container>
            {movies.map((movie, index) => (
                <Card key={index}>
                    <ScoreMovie>
                        <StarIcon src={Star} />
                        <VoteMovie>{movie.vote_average.toFixed(1)}</VoteMovie>
                    </ScoreMovie>
                    {movie.poster_path ? <ImageMovie src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} title={movie.title} alt={movie.title} /> : <ImageMovie src={ImageNotFound} />}
                    <Info>
                        <Title title={movie.title}>{movie.title}</Title>
                        <ReleaseDate>{movie.release_date ? new Date(movie.release_date).getFullYear() : 'Ano desconhecido'}</ReleaseDate>
                        <Button>Detalhes</Button>
                    </Info>
                </Card>
            ))}
        </Container>
    );
}

export default Cards;