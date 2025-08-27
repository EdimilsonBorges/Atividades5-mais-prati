import { Container, Ul, Link, Logo } from "./style";

const Header = () => {
    return (
            <Container>
                <Logo to={"/"}>Filmes</Logo>
                <nav>
                    <Ul>
                        <li><Link to={"/"}>Inicio</Link></li>
                        <li><Link to={"/favorites"}>Favoritos</Link></li>
                    </Ul>
                </nav>
            </Container>
    )
}
export default Header;