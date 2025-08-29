import { useEffect, useState } from "react";
import Cards from '../../components/movies/Cards';
import {Container,TitleCards, MsgEmpty} from './style';

const Favorites = () => {
    const [moviesFavorites, setMoviesFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setMoviesFavorites(storedFavorites);
    }, []);

    return (
        <Container>
            <TitleCards>Meus Filmes Favoritos</TitleCards>

            {moviesFavorites.length === 0 ? (
                <MsgEmpty>Você ainda não tem filmes favoritos.</MsgEmpty>
            ) : (
                <Cards $length={moviesFavorites.length} movies={moviesFavorites}/>
            )}
        </Container>
    );
};

export default Favorites;
