
import {Container, Genre} from './style';

const GenresCard = ({genres}) =>{

  return (
    <Container>
      {genres.map((genre, index)=>(<Genre key={index}>{genre.name}</Genre>))}
    </Container>
  );
}

export default GenresCard;